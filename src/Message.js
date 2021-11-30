import React from 'react'
import {Bottomnav} from './Bottomnav';
import Messagecenter from './Messagecenter';
import './message.css';
const Message = () => {
    var a=sessionStorage.getItem("pic");
    return (
        <div>
        <div className="msg">
            <Messagecenter  a={a}/>
            </div>
            <Bottomnav/>
        </div>
    )
}

export default Message
