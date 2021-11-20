import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import { auth,db } from '../firebase';
import { collection,addDoc,serverTimestamp} from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth"

function ChatIn({channelName, channelId, chatRef}) {
    const [input,setInput] = useState("");  
    const [user]   = useAuthState(auth);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(channelId);
        if(!channelId){
            return false;
        }
        // const userProjectsColRef = collection(db, 'rooms', channelId, 'message');
        // const newProjectDocRef =  doc(userProjectsColRef);          
        // addDoc(collection(newProjectDocRef,'messages'), {            
       addDoc(collection(db,'rooms',channelId, 'messages'), {
            message: input,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        }); 
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        })        
        setInput("");     
        
    };
    
    return (
        <ChatInContainer>
            <form>
               <input value={input} 
               onChange={(e) => setInput(e.target.value)}
               type="text" placeholder={`Message #${channelName}`} />
               <Button hidden type='submit' onClick={sendMessage}>
                  Send
              </Button>
            </form>
        </ChatInContainer>
    )
}

export default ChatIn;
const ChatInContainer = styled.div`
  border-radius: 20px;
  >form{
      position: relative;
      display: flex;
      justify-content: center;
  }
  >form >input{
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 20px;
      outline: none;
  }
  >form > button{
      display: none !important;
  }
`;
