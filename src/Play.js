import { Avatar } from '@mui/material';
import React from 'react'
import './post.css';
import { useSelector } from "react-redux";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Play = () => {
   
    const products=useSelector((state)=>state.allProducts.video);
    
    const renderList=products.map((products)=>{
       
        const {profilepic,image,username,message}=products;
    return (
        <div className="post">
          <div className="post_top">
             <Avatar  src={profilepic} className="avatar_post"/> 
            <div className="post_top_info">
                <h3>{username}</h3>
               
            </div>
            </div> 
            <div className="post_bottom">
                
                <p>{message}</p>
                </div> 
                <div className="post_image">
                     <img src={image} alt=""/> 
                     <video width="500" height="240" controls autoplay>
  <source src={image}  type="video/mp4"/></video>
 
 


                </div>
                <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
<p>Like</p>
                </div>
                
                <div className="post_option">
                    <ChatBubbleOutlinedIcon/>
<p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeOutlinedIcon/>
<p>Share</p>
                </div>
                    </div>
       </div>
    )
    }
    );
    return(
    <>{renderList}</>
    );
    };
export default Play
