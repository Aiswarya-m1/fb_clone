import React from 'react';
import './st.css';

function Fnpopup(props){
   
   
   
    return(props.trigger)?(
       
        <div className='popupout' >
        <div className='popup_inner1'>
            <h1>Hello This is a popup</h1>
          
            
          
            <button  id="button1" className='closebtn' onClick={()=>props.setTrigger(false)}>Close</button>
           
            {props.children} 
            </div> </div>
        
    ): "" ;
} 
function togg(){
    alert(" This is alert1 ");
}

export default Fnpopup;
