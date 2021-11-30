import { Avatar } from '@mui/material';
import React from 'react'

import './story.css';
export const Story = ({image,proSrc,title}) => {
    return (
        <div className="story" style={{backgroundImage:`url(${image})`}}>
            <Avatar  className="story__avatar" src={proSrc}/>
            <h4>{title}</h4>
        </div>
    )
}
