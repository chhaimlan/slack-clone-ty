import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Chat from './components/Chat';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth); 
  if(loading){
    return(
      <Apploading>
         <Apploadingcontant>
              <img src="https://z-p3-scontent.fpnh18-1.fna.fbcdn.net/v/t1.6435-9/70598596_2404218779675714_359723199170084864_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHcA7q6p4jC9MApMEwW2hM6FRg7Cw_l4CMVGDsLD-XgI_4PIlDHp_Oam0DwiejDIecgLLWua3KCayMMjTJPx8SF&_nc_ohc=vrxnLRJ_p6YAX-bfMP6&_nc_ht=z-p3-scontent.fpnh18-1.fna&oh=5e5b30b7fc9c7b8b0a3d91d07e9d2c47&oe=61BBABA9" alt="" />
             <Spinner 
               name="ball-spin-fade-loader"
               color="purple" fadeIn="none"
             />
         </Apploadingcontant>
      </Apploading>
    )
  }
  return (
   
<div className="App">
  <Router>
    {!user ? (
      <Login />
    ):(
         <>
          <Header />
           <AppBody>
               <Sidebar /> 
               <Routes>  
                       <Route path="/"
                          element={<Chat />}
                        />
               </Routes>                 
          </AppBody>                                            
         </> 
       )}        
    </Router>
   </div>
  
  );
}

export default App;
const Apploading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const Apploadingcontant = styled.div`
 text-align : center;
 padding-bottom :100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 >img{
   height: 100px;
   padding: 20px;
   margin-bottom: 40px;
 }
`;

const AppBody =styled.div`
    display: flex;
    height: 100vh;
`;
