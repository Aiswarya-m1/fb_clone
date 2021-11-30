
import Header from './Header';
import React from 'react'
import './video.css';
import './feed.css';
import './post.css';

import './profile.css';
import './home.css';
import {Cover} from './Cover';
import {Widgets} from './Widgets';
import {Sidebar} from './Sidebar';
import Local1 from './Local1';
import Active from './Active';
import {Bottomnav} from './Bottomnav';
import { Avatar } from '@mui/material';
export const Profile2 = () => {
    return (
        <div className="home">
        <Header/>
        <div className="home_body">
        <Sidebar/> </div>
        <div className="middle"><div className="feed"><Cover/><Local1/></div></div>
        

        <div className="right_content">
        <Widgets/>

        </div>
        <div className="bottom">
        <Active/></div>
        <div className="bottomvar">
        <Bottomnav/>
        
        </div>
       </div>     
    )
}