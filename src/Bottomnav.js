 import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react';
import {Home} from './Home';
import Login from './Login';
import Routerer from './Router';
import {Storyreed} from './Storyreed';
import Messagecenter from './Messagecenter';
import {
    
   Link
    } from "react-router-dom";

import { useState } from 'react';

import DialpadIcon from '@mui/icons-material/Dialpad';
import NfcOutlinedIcon from '@mui/icons-material/NfcOutlined';
import MessageIcon from '@mui/icons-material/Message';
import './btm.css';
export const Bottomnav = () => {
     const [value,setValue]=useState(0);
 
    return (
        <div className="btm">
           <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
 
>
  <BottomNavigationAction label="Recents" component={Link}  to="/Home"  icon={<DialpadIcon />} />
  <BottomNavigationAction label="Favorites"   component={Link}  to="/Message" icon={<MessageIcon />} />
  <BottomNavigationAction label="Nearby"  component={Link}  to="/Status" icon={<NfcOutlinedIcon />} />
</BottomNavigation>
{/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Messagecenter">About Us</Link>
      </li>
      <li>
        <Link to="/Storyreed">Contact Us</Link>
      </li>
    </ul> */}
 {/* <Link to="/Login" ><Home /></Link>
 <Link to="/Login" ><DialpadIcon /></Link>
 <Link to="/Messagecenter" ><NfcOutlinedIcon /></Link>
 <Link to="/Storyreed" > <MessageIcon /></Link></Router> */}

</div>);
}