import { Avatar ,IconButton} from '@mui/material';
import { useSelector,useDispatch } from "react-redux";

import Login from './Login';


import {Component, React,useState} from 'react'
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


let userArray=[];
var ar=[]; var msg="";
var user=sessionStorage.getItem("username");
var pic=sessionStorage.getItem("pic");

class Messagecenter extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
         var user=sessionStorage.getItem("username");
         var pic=sessionStorage.getItem("pic");
         msg=`What's on your mind ${user}`;
        this.state = {
            message: '',
        user: user,
        pic: pic,image:'',data:[]
        }
    }
    





     imageHandler  =(e) =>
    {
        const reader= new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
              this.state.image =reader.result
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...

handleFormSubmit(e) {
    e.preventDefault()
    
    var arr=JSON.parse(localStorage.getItem([user]));
   
    if(arr!=null){
      arr.push(this.state);  
                
      localStorage.setItem([user],JSON.stringify(arr));
      this.setState({
        message: '',
        user: user,
        pic: pic,image:''
    
    })
      
    }else{
      userArray.push(this.state);  
                
               localStorage.setItem([user],JSON.stringify(userArray));
               this.setState({
                message: '',
                user: user,
                pic: pic,image:''
            
            })
        
    }


alert("Data added successfully");
    
window.location.reload();
  


}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem([user]));
 ar=this.documentData;
    if (localStorage.getItem([user])) {
        
        this.setState({
            message: this.documentData.message,
            user: user,
            pic: pic,image: this.documentData.image,data:this.documentData 
    })
} else {
    this.setState({
        message: '',
        user: user,
        pic: pic,image:''
    })
}
}
 
  render(){
    return (
        <div className="message_center">
            
            <div className="message_center_top">
           
            <Avatar src={this.props.a}></Avatar>
            <form>
            <input type="text" name="message" value={this.state.message}  onChange={this.handleChange} className="message_center_input" placeholder={msg}/>
            <button type="submit" onClick={this.handleFormSubmit}>Hidden submit</button>
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
  <input id="file-input" type="file"  onChange={this.imageHandler} style={{visibility:" hidden" ,position: "absolute"}}/></label>
           {/* <h3>Photo/ Video</h3> */}
            </div>
            <div className="message_center_options">
            < EmojiEmotionsIcon style={{color:"orange"}}/>
           <h3>Feeling/Activity</h3>
            </div>
            </div>
        
          {/* <Messageout />  */}
        </div>
    )
}
}
export default Messagecenter
