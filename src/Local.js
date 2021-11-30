import React from 'react'
import { Avatar } from '@mui/material';

import './post.css';
import { useSelector } from "react-redux";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import c1 from'./images/c1.jfif';
import p1 from'./images/p1.jpg';
export const Local = (props) => {
  
            const nam=props.name;
            console.log("props"+nam)
        const products=JSON.parse(localStorage.getItem(nam));
    
        const renderList=products && products.map((product)=>{
        //    console.log(renderList);
        //    const renderList1=renderList.map((product)=>{
            const {message, user, pic, image, data}=product;
        return (
            <div className="post">
              <div className="post_top">
                 <Avatar  src={pic} className="avatar_post"/> 
                <div className="post_top_info">
                    <h3>{user}</h3>
                   
                </div>
                </div> 
                <div className="post_bottom">
                    
                    <p>{message}</p>
                    </div> 
                    <div className="post_image">
                         <img src={image} alt=""/> 
                        
     
     
    
    
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
    export default Local
    
