import './feed.css';
import React from 'react'
import Post from './Post';
import Messageout from './Messageout';
import Messagecenter from './Messagecenter';
import { useSelector } from "react-redux";
import {Storyreed} from './Storyreed';


function Feed() {
  
   
    var a=sessionStorage.getItem("pic");
    return (
        <div className="feed">
            <Storyreed/>
          
            <Messagecenter  a={a}/>
          
         
            <Post/>
          
          
            
        </div>
    )
}

export default Feed
