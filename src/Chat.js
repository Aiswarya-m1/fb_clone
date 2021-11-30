import React from 'react'
import './chat.css';
import JSONDATA from './Data.json'
import {
    
    Link
     } from "react-router-dom";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
export const Chat = (props) => {
    const [srch,setSrch]=useState('');
    const chng=(e)=>{
        setSrch(e.target.value);
       
            // console.log(data.map(val)=>val))  
            // <li>data.map((key,val)=>val) <li/>
        }
    return (props.trigger)?(
        <div className="chat">
            <div className="top1">
           <h4>New Message  <CloseIcon   onClick={()=>props.setTrigger(false)}/></h4>  
           </div>
           <p>To:</p>
           <input name="text" type="text" className="in"  onChange={chng}  placeholder="Search Friends"/>
           <h5>Suggestions</h5>
           <div className="srcontain">
                    {JSONDATA.filter((val)=>{
                    if(srch==''){
                        // return val;
                    }else if(val.name.toLowerCase().includes(srch.toLowerCase())){
                        return val;
                    }
                }
              
                ).map((val,key)=>{
                        return <Link to={'/profile/'+val.id+"/"+val.name}><div     key={key}><h4>{val.name}</h4></div></Link>
                    })} </div> 
        </div>
   ): "" ;
}
