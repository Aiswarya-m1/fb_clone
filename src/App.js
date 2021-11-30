
import './App.css';
import React from 'react'
import {Rendereg} from './Rendereg';
import Login from './Login';
import {Home} from './Home';
import Demo from './Demo';

import {Profile2} from './Profile2';
import {video} from './video';
import {Friendshome} from './Friendshome';
import Status from './Status';
import Message from './Message';
import {Signup} from './Signup';
import {
  Router,
  Switch,Redirect,
  Route} from "react-router-dom";
function App() {
  const [auth, setAuth] = React.useState(false);
 const chanaut=()=>{
   setAuth(true)
 }
 const chanaut1=()=>{
  setAuth(false)
}
  return (
    
    <div className="app">
      {/* <Demo/> */}
   {/* <Hme/> */}
   
<Switch>
  
        <Route exact path="/">
        <Login/> 
        
        </Route>
        
        
        <Route path="/Status" component={Status} />
        <Route path="/Message" component={Message} />
        <Route path="/Home" >  <Home auth={auth} lg={chanaut1} /> </Route>
       
        <Route path="/Signup" >   <Signup   /> </Route>
        <Route path="/Login"  > <Login auth={auth} chanaut={chanaut}  /> </Route>
      
        
 </Switch>

 {auth==true?<Redirect to='/Home' />:<Redirect to='/Login' />}
    </div>
  );
}

export default App;
