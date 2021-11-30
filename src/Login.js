
import './style.css';
import {Home} from './Home';

import {useHistory} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import logo  from './images/logo.svg';
import {Grid} from '@material-ui/core';
import { useSelector } from "react-redux";
const Login =(props)=> {

  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
    
   let history=useHistory();
   useEffect(() => {
    window.addEventListener("popstate", () => {
      history.go(1);
    });
  }, []);
  
       
  
  const emailRegex = /\S+@\S+\.\S+/;


 
 
  const formValidation = () => {
    const pasreg=/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/
    let isvalid=true;
    // const usernameerr ={};
    // const passwrderr ={};
    if (email=="") {
      // usernameerr.usernotmatch="Email not matching ";
      alert("Please fill Email ");

      isvalid=false;
      return false;
    }
    if (pass=="") {
      // usernameerr.usernotmatch="Email not matching ";
      alert("Please fill Password ");

      isvalid=false;
      return false;
    }
    if (!emailRegex.test(email)) {
      // usernameerr.usernotvalid="Email not valid";
      alert("Email not valid");
      isvalid=false;
      return false;
    } 
    if (!pasreg.test(pass)) {
          //   // usernameerr.usernotvalid="Email not valid";
          alert("password not valid");
            isvalid=false;
            return false;
    }
    
  
   
    
   
    
    
    var q= localStorage.getItem("document");
    var w=JSON.parse(q);
    var arr=w;
    if(q==null){
           alert("user not registered  ");
           isvalid=false;
           return false;
         }
 
    var valid=false;
       for(var i=0;i<arr.length;i++){
           if(arr[i].email==email&&arr[i].password==pass){
            var a=arr[i].name;
               var b=arr[i].profilePhoto;
               sessionStorage.setItem("username",a);
               sessionStorage.setItem("pic",b);
               valid=true;
               break;
           }}
           if(valid==false){
            alert("Phone number or password is incorrect");
            isvalid=false;
        return false;
           }
  return isvalid;
  };
   
  const onSubmit=(e)=>{
    e.preventDefault();
    const isvalid=formValidation();
   
   if(isvalid){
    setPass("");
    setEmail("");
    props.chanaut();
    // return <Redirect to='/Home' />
    // history.push('/Home');
   
   }}
   
   const Redir=()=>{
    history.push('/Signup');
   }
   
    return (


      











        <div className="main" >
<Router>
     
        
        
     <Switch>
    
       <Route path="/Home"  ><Home/></Route>
        
     </Switch>
  
 </Router>


    
     <div className="left_contentt" >
<img src={logo}/>
<h4>Facebook helps you connect and share with the people in your life.</h4>

</div> 

   
  
  <div className="right_contentt" >
      <div className="right_contentt_top"> 
         <form  onSubmit={onSubmit}>
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Email address or Phone number"/><br/>
      
       
      
      <input type="password" value={pass}  onChange={(e)=>{setPass(e.target.value)}}   placeholder="Password"/><br/>

   
      <button  type="submit">Log In</button><br/></form>
      <a href="">Forgotten Password?</a>
      </div>
       <div className="right_contentt_bottom">
      <button onClick={Redir}>Create new Account</button>
      <p>Create a Page for a celebrity, band or business.</p>
      </div> 
      
      </div> 
      {/* <div className="ptag"> 
     </div> */}
  







    

 
        </div>
    );

    }



export default Login;