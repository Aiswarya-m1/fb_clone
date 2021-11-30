
import './style.css';
import {Home} from './Home';
import { Redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,Link} from "react-router-dom";
import React, { useState } from 'react';
import logo  from './images/logo.svg';
import {Grid} from '@material-ui/core';
import { useSelector } from "react-redux";
const Login =()=> {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [isValid1, setIsValid1] = useState(false);
  const [message1, setMessage1] = useState('');

  const valid=useSelector((state)=>state.allProducts.validation);
    
   
       
        const {username,password}=valid;
        console.log(username,password);
  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    event.preventDefault();
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };
 
  const validatepass = (event) => {
    event.preventDefault();
    const pass = event.target.value;
    if (pass.length>6) {
      setIsValid1(true);
      setMessage1(' ');
    } else {
      setIsValid1(false);
      setMessage1('Please enter a valid password');
    }
  };
  

   
    return (


      











        <div  >
<Router>
     
        
        
     <Switch>
    
       <Route path="/Home"  ><Home/></Route>
        
     </Switch>
  
 </Router>

<Grid container spacing={2}>
  <Grid item xs={6}>
    
     <div className="left_content" >
<img src={logo}/>
<h4>Facebook helps you connect and share with the people in your life.</h4>

</div>

   
  </Grid>
  <Grid item xs={6}>
  <div className="right_content" >
      <div className="right_content_top">
        <form >
      <input type="text"  onChange={validateEmail}  placeholder="Email address or Phone number"/><br/>
      <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
      <input type="text" onChange={validatepass}   placeholder="Password"/><br/>

      <div className={`message1 ${isValid ? 'success' : 'error'}`}>
        {message1}
      </div>
      <button onClick={Redir}>Log In</button><br/></form>
      <a href="">Forgotten Password?</a>
      </div>
      <div className="right_content_bottom">
      <button>Create new Account</button>
      
      </div>
     
      </div><div className="ptag">
      <p>Create a Page for a celebrity, band or business.</p></div>
  </Grid>
  
</Grid>







    

 
        </div>
    );
}




export default Login;