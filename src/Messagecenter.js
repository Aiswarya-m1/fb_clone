import { Avatar ,IconButton} from '@mui/material';
import { useSelector,useDispatch } from "react-redux";

import Login from './Login';


import {Component, React,useState,useEffect} from 'react'
import Messageout from './Messageout';
import dp from'./images/dp.jpg';
import bg1 from'./images/bg1.jpg';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './messagecenter.css';

import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';



var msg="";
var user=sessionStorage.getItem("username");
var pic=sessionStorage.getItem("pic");

const Messagecenter= (props)=> {
    const [message, setMessage] = useState('');
        const [image, setImage] = useState('');
      
         var user=sessionStorage.getItem("username");
         var pic=sessionStorage.getItem("pic");
         msg=`What's on your mind ${user}`;





         const   imageHandler  =(e) =>
    {
        const reader= new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const  getloc=()=>{

        let list= localStorage.getItem([user]); 
        console.log(list);
        if(list){
      return JSON.parse( localStorage.getItem([user])); 
        }
        else{
          return [];
        }
        }

   

        const handleFormSubmit=(e)=> {
    e.preventDefault()
    
    if(!message && !image){

    }else{
        var user=sessionStorage.getItem("username");
        var pic=sessionStorage.getItem("pic");
        const a={ "message": message,
        "user": user,
        "pic": pic,"image":image}
      setItems([...items,a])
      setMessage('')
      setImage('')
    }
        
    }


    const [items, setItems] = useState(getloc());

    useEffect(()=>{
        // var user=sessionStorage.getItem("username");
        // var pic=sessionStorage.getItem("pic");
        // const a={ "message": message,
        //     "user": user,
        //     "pic": pic,"image":image}
        //   setItems([...items,a])
        localStorage.setItem([user],JSON.stringify(items));
         
      },[items]);
 

    return (
        <div className="message_center">
            
            <div className="message_center_top">
           
            <Avatar src={props.a}></Avatar>
            <form>
            <input type="text" name="message"     value={message} onChange={(e)=>setMessage(e.target.value)} className="message_center_input" placeholder={msg}/>
            <button type="submit" onClick={handleFormSubmit}>Hidden submit</button>
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
        
            <Messageout item={items}/>
        </div>
    )
}

export default Messagecenter
