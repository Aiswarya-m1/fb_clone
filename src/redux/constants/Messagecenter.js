import { Avatar ,IconButton} from '@mui/material';
import {React,useState} from 'react'
import dp from'./images/dp.jpg';
import bg1 from'./images/bg1.jpg';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './messagecenter.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { addpost } from './redux/actions/Actions';
let userArray=[];
const Messagecenter = () => {
 var   documentData;
    const [input,setInput]= useState('');
    const [image,setImage]= useState('');
    const dispatch = useDispatch();
    const Handlesubmit=(e)=>{
e.preventDefault();

const p={
    profilepic: dp,
        image:image,
        username:"Aiswarya",
    message:input
}
userArray.push(p);  
            
localStorage.setItem('message',JSON.stringify(userArray));
console.log(JSON.parse(localStorage.getItem("message")));
dispatch(addpost(userArray));
console.log(userArray);
setInput('');
    }
 const    imageHandler  =(e) =>
    {
        const reader= new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    useEffect(() => {
   
        return () => {
            documentData = JSON.parse(localStorage.getItem('message'));
         
            if (localStorage.getItem('message')) {
               

                  
                setInput(documentData.message);
                    
            
        } else {
            setInput("");
            setImage("");
        }
        }
    }, [])


    useEffect(() => {
        // storing input name
        localStorage.setItem("message", JSON.stringify(userArray));
      }, [userArray]);
    return (
        <div className="message_center">
            
            <div className="message_center_top">
            <Avatar src={dp}></Avatar>
            <form>
            <input type="text"  value={input} onChange={(e)=>{setInput(e.target.value)}} className="message_center_input" placeholder="What's on your mind,Aiswarya?"/>
            <button type="submit" onClick={Handlesubmit}>Hidden submit</button>
            </form>
            </div>
            <div className="message_center_bottom">
            <div className="message_center_options">
           < VideoCameraBackIcon style={{color:"red"}}/>
           <h3>Live Video</h3>
            </div>
            <div className="message_center_options">
            
            < PhotoLibraryIcon style={{color:"green"
    }}/>
            <label for="file-input" class="btn btn-default" flow-btn>
    Please choose a Photo
  <input id="file-input" type="file"  onChange={imageHandler} style={{visibility:" hidden" ,position: "absolute"}}/></label>
           {/* <h3>Photo/ Video</h3> */}
            </div>
            <div className="message_center_options">
            < EmojiEmotionsIcon style={{color:"orange"}}/>
           <h3>Feeling/Activity</h3>
            </div>
            </div>
        

        </div>
    )
}

export default Messagecenter
