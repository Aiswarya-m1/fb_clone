import React from 'react'
import Fnpopup from './Fnpopup';

import { useState,useEffect } from 'react';import Header from './Header';

export  const Rendereg = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
        setbutton(true)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
const [buttonpopup,setbutton]=useState(false);
const [buttonpopup1,setbutton1]=useState(false);
  return (
    <div>
     
    <Fnpopup   trigger={buttonpopup} setTrigger={setbutton}/>
    </div>
  )
}
