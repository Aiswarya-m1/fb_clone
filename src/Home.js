import React from 'react'
import Header from './Header';
import {Widgets} from './Widgets';
import {Sidebar} from './Sidebar';
import Feed from './Feed';
import Active from './Active';
import {Bottomnav} from './Bottomnav';
import {Profile1} from './Profile1';
import './home.css';

import { Friendshome } from './Friendshome';
import { video } from './video';
import {BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'
import Login from './Login';
import { Rendereg } from './Rendereg';
export const Home = (props) => {
    return (
       
        <Router> 
        <div className="home">
            <Header lg={props.lg}/>
            <div className="home_body">
            <Sidebar/> </div>
            <div className="middle">
           
            <Switch>
  
               
  <Route path="/Home" component={Feed} />
  <Route path="/frnds" component={Friendshome} />
  <Route path="/video" component={video} />
  <Route path="/Rendereg" component={Rendereg} />
  <Route path="/Profile/:id/:name" component={Profile1} />
</Switch>
 
     
                
                </div>
            

            <div className="right_content">
            <Widgets/>

            </div>
            <div className="bottom">
            <Active/></div>
            <div className="bottomvar">{props.auth}
            <Bottomnav/>
            
            </div>
           </div> 
           </Router>   
    )
}
