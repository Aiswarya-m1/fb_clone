import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './post.css';

import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const Messageout = (props) => {
    
    var items=props.item
    const renderList=items && items.map((item)=>{
      
        const {pic,image,user,message}=item;
            //  useEffect(()=>{
            //     myLocalStorageData= JSON.parse( localStorage.getItem("message"));
            //     console.log("store data"+myLocalStorageData) ; 
            // },[]);
             
           
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
export default Messageout
  
       
