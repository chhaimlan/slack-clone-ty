import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React,{useRef,useEffect} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import ChatIn from './ChatIn';
import {useCollection,useDocument} from "react-firebase-hooks/firestore";
import { doc,orderBy} from "firebase/firestore";
import { db } from '../firebase';
import Message from './Message';
function Chat() {  
  const chatRef = useRef(null)
     const roomId = useSelector(selectRoomId);   
   // console.log(roomI);d 
      const [roomDetails] = useDocument(
        roomId && doc(db,"rooms", roomId)          
        //reference
        //https://firebase.google.com/docs/firestore/data-model#web-version-9_3
    );  
    //This const below got undefined
    const [roomMessages, loading] =  useCollection(
      roomId && doc(db, "rooms", roomId,"messages" ),
      orderBy("timestamp", "asc")              
      //doc(db,'rooms',roomIds, 'message', 'messages')
   );   

    console.log('The room detail',roomDetails?.data());
    console.log('The room message',roomMessages);

    useEffect(() => {
       chatRef?.current?.scrollIntoView({
          behavior: "smooth",
       });
    }, [roomId,loading])

    return (
        <Chatcontainer> 
           {/* when open this line of code it is not show form input */}
         {/* {roomDetails && roomMessages && (           */}
          <>        
            <Header>
                <HeaderLeft><h4><strong>#{roomDetails?.data().name} </strong></h4>
                {/* {roomDetails?.data().name} */}
                   <StarBorderOutlined />
                </HeaderLeft>
                <HeaderRight>
                     <p>
                        <InfoOutlined /> Details
                     </p>                    
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map(doc =>{
                  const {message,user,userImage,timestamp} = doc.data();
                  return(
                    <Message
                       key={doc.id}
                       message={message}
                       timestamp={timestamp}
                       user={user}
                       userImage={userImage}
                    />
                  )
                })}
                <ChatBottom  ref={chatRef}/>
            </ChatMessages>
            <ChatIn 
               chatRef = {chatRef}
               channelName={roomDetails?.data().name}
               channelId={roomId}
            />
           </>
           {/* )}   */}
        </Chatcontainer>
    )
}

export default Chat;
const ChatBottom = styled.div`
   padding-bottom: 200px;
`;
const Header = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
   border-bottom: 1px solid lightgray;
`; 
const HeaderLeft = styled.div`
   display: flex;
   align-items: center;
  >h4{
      display: flex;
      text-transform: lowercase;
  }
  >h4 >.MuiSvgIcon-root{
      margin-left: 10px;
      font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  >p{
      display: flex;
      align-items: center;
      font-size: 14px;
  }
  >p >.MuiSvgIcon-root{
      margin-right: 5px !important;
      font-size: 16px;
  }
`;
const Chatcontainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const ChatMessages = styled.div``;

