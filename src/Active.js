import React from 'react'
import './active.css';
import a1 from'./images/a1.jfif';
import a2 from'./images/a2.png';
import a3 from'./images/a3.jfif';
import {Chat} from './Chat';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import AirplayIcon from '@mui/icons-material/Airplay';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
export default function Active() {
    const [buttonpopup,setbuttonpopup]=useState(false);
    return (
        <div className="active">
           <div className="top" >
<h4>Contacts</h4>
<div className="options"><AirplayIcon/></div>
<div className="options"><SearchIcon     onClick={()=>setbuttonpopup(true)} /></div>
<Chat   trigger={buttonpopup} setTrigger={setbuttonpopup}/>
<div className="options"><MoreHorizIcon/></div>
           </div>
           <div className="bottom" >
               <div className="items">
<Avatar  src={a1}/><h4>Reshma</h4>

</div>
<div className="items">
<Avatar src={a2}/><h4>Dhanush</h4>
</div>
<div className="items">
<Avatar src={a3}/><h4>Manu</h4>
</div>
<div className="items">
<Avatar src={a1}/><h4>Meena</h4>
</div>
</div>
</div>



          
    )
}
