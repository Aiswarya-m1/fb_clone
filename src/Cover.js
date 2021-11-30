import React from 'react'
import c1 from'./images/c1.jfif';
import p1 from'./images/p1.jpg';
import { Avatar } from '@mui/material';
import './cover.css';
export const Cover = (props) => {
    const nam=props.name;
    console.log("props"+nam)
    const products=JSON.parse(localStorage.getItem("document"));
    
        const renderList=products&&products.filter((products=>products.name==nam)).map((product)=>{
//    console.log(renderList);
   const { name, pic,profilePhoto}=product;
    return (
        <div style={{textAlign:"center"}}>
<img src={c1}  style={{width:"100%"}}/>
<div className="contr">
<Avatar id="im"  src={profilePhoto}></Avatar><h2>{name}</h2></div>
<button   className="btn2"  >Add Friend</button>
<button className="btn2">Message</button>
<button className="btn2">Follow</button>
        </div>
  
     )
     }
     );
     return(
     <>{renderList}</>
     );
     };