import { signInWithPopup } from '@firebase/auth';
import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';



function Login() {
    const signIn = (e) =>{
            e.preventDefault();
           signInWithPopup(auth, provider)
           .catch((error) =>
               alert(error.message)
           );
    };
    return (
        <LoginContaner>
            <LoginInner>
                  <img 
                  src="https://z-p3-scontent.fpnh18-1.fna.fbcdn.net/v/t1.6435-9/70598596_2404218779675714_359723199170084864_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHcA7q6p4jC9MApMEwW2hM6FRg7Cw_l4CMVGDsLD-XgI_4PIlDHp_Oam0DwiejDIecgLLWua3KCayMMjTJPx8SF&_nc_ohc=vrxnLRJ_p6YAX-bfMP6&_nc_ht=z-p3-scontent.fpnh18-1.fna&oh=5e5b30b7fc9c7b8b0a3d91d07e9d2c47&oe=61BBABA9" 
                  alt=""
                  />
                  <h1>Sign in with Me</h1>
                  <p>Creative</p>
                  <Button onClick={signIn}> 
                   Sign In with Google
                  </Button>
            </LoginInner>
        </LoginContaner>
    )
}

export default Login;
const LoginContaner = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInner = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius :10px;
box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  >img{
       object-fit: contain;
       height: 100px;
       margin-bottom: 40px;
   }
   >button{
       margin-top: 50px;
       text-transform:  inherit !important;
       background-color: #0a8d48 !important;
       color: white;

   }
`;
