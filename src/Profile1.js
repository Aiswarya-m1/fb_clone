
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
import Local from './Local';
import Active from './Active';
import {Bottomnav} from './Bottomnav';
import { Avatar } from '@mui/material';
import {useParams} from 'react-router';
export const Profile1 = () => {
    let {id,name}=useParams();
    console.log(id,name);
    return (
        <div className="feed">
            <Cover name={name}/> 
        <Local name={name}/></div>
          
    )
}