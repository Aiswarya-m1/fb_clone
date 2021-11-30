import React from 'react'
import bg1 from'./images/bg1.jpg';
import bg2 from'./images/bg2.jpg';
import a1 from'./images/a1.jfif';
import a2 from'./images/a2.png';
import a3 from'./images/a3.jfif';
import bg3 from'./images/bg3.jpg';
import bg4 from'./images/bg4.jpg';
import bg5 from'./images/bg5.jfif';

import {Story} from './Story';
import './storyreed.css';
export const Storyreed = () => {
    return (
        <div className="storyreed">
            <Story image={bg1} proSrc={a1} title="Reshma"/>
            <Story image={bg2} proSrc={a2} title="Neethu"/>
            <Story image={bg3} proSrc={a3} title="Anjana"/>
            <Story image={bg4} proSrc={a1} title="Lekha"/>
            <Story image={bg5} proSrc={a2} title="Renjini"/>
            
        </div>
    )
}
