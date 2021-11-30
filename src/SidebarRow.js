import { Avatar } from '@mui/material';
import React from 'react'
import './sidebarrow.css';
export const SidebarRow = ({src,Icon,title}) => {

    return (
        <div className="sidebar_row">
            
          {src && <Avatar src={src}/>}{ Icon && <Icon/>}<h4>{title}</h4>
             
        </div>
    )
}
