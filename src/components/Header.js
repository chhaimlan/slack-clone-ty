import React from 'react';

import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from '@material-ui/icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);
    console.log("user is ", user);
    return (
        <HeaderContainer>
           <HeaderLeft>
               <HeaderAvatar  onClick={() => auth.signOut()}
                 alt={user?.displayName}
                 src={user?.photoURL}                 
               />
               <AccessTime />
           </HeaderLeft>
           <HeaderSearch>
               <Search />
               <input placeholder="Search Lan" />
           </HeaderSearch>
           <HeaderRight>
              <HelpOutline />
           </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;
  >input{
      background-color: transparent;
      border: none;
      text-align: center;
      min-width: 30vh;
      outline: none;
      color: white;
  }
`;

const HeaderContainer = styled.div`
 display: flex;
 position: fixed;
 width: 100%;
 align-items: center;
 justify-content: space-between;
 padding: 10px;
 background-color: var(--slack-color);;
 color: white;
`;

const HeaderLeft = styled.div`
 flex: 0%.3;
 display: flex;
 align-items: center;
 margin-left: 20px;

 >.MuiSvgIcon-root{
     margin-left: auto;
     margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
 flex: 0.3;
 display: flex;
 align-items: flex-end;
 >.MuiSvgIcon-root{
     margin-left: auto;
     margin-right: 20px;
 }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;


`;
