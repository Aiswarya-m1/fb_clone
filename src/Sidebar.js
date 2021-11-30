import React, { Component } from 'react'
import {SidebarRow} from './SidebarRow';
import './sidebar.css';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import dp from'./images/dp.jpg';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    };
    render(){
        var user=sessionStorage.getItem("username");
    var pic=sessionStorage.getItem("pic");
    return (
        <div className="sidebar">
             <SidebarRow title={user}  src={pic}/>
            <SidebarRow title='Find Friends' Icon={PeopleOutlineOutlinedIcon} />
            <SidebarRow title='Groups' Icon={SupervisedUserCircleOutlinedIcon}/>
            <SidebarRow title='Marketplace' Icon={HomeIcon}/>
            <SidebarRow title='Watch' Icon={SubscriptionsOutlinedIcon}/>
            <SidebarRow title='Memory' Icon={SupervisedUserCircleOutlinedIcon}/>
            <SidebarRow title='Saved' Icon={AccessAlarmIcon}/>
            <SidebarRow title='Pages' Icon={BookmarksIcon}/>
            <SidebarRow title='Events' Icon={FlagIcon}/>
            <SidebarRow title='Add Center' Icon={CalendarTodayIcon}/>
        </div>
    )
}
}