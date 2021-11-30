import React from 'react'
import './header.css';
import JSONDATA from './Data.json'
import Login from './Login';
import {
  BrowserRouter as Router,Route,Switch,
  
    Link
     } from "react-router-dom";
     import MenuIcon from '@mui/icons-material/Menu';
     import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import dp from'./images/dp.jpg';
import {useHistory} from "react-router-dom";
import Fnpopup from './Fnpopup';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import DialpadIcon from '@mui/icons-material/Dialpad';
import NfcOutlinedIcon from '@mui/icons-material/NfcOutlined';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import fb_logo from'./images/fb_logo.png';
import { Avatar, IconButton } from '@mui/material';

function Header(props) {
    var user=sessionStorage.getItem("username");
    var pic=sessionStorage.getItem("pic");
    const [buttonpopup,setbuttonpopup]=useState(false);
    const [srch,setSrch]=useState('');
    const [open, setOpen] = useState(false);
    let history=useHistory();
    var showInfo=false;
   const chng=(e)=>{
    setSrch(e.target.value);
    setOpen(true);
        // console.log(data.map(val)=>val))  
        // <li>data.map((key,val)=>val) <li/>
    }
    const logout=()=>{
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('pic');
        props.lg();
        // history.push('/');
     
       
        }
    return (
     
        <div className="header">
            <div className="header_left ">
                <img src={fb_logo} alt="Facebook_logo"/>
                <div className="header_input">
                    <SearchIcon/>
                    <input type="text" onChange={chng}  placeholder="Search Facebook"/></div> 
                    <div className="srcontainr">
                    {JSONDATA.filter((val,key)=>{
                    if(srch==''){
                        // return val;
                    }else if(val.name.toLowerCase().includes(srch.toLowerCase())){
                        return val;
                    }
                }
              
                ).map((val,key)=>{
                        return <Link to={'/profile/'+val.id+"/"+val.name}><div     key={val.id}><p>{val.name}</p></div></Link>
                    })} </div> 
                <div className="mendisp">
            <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label"><MenuIcon/></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
         
         
         
        >
          <MenuItem value="">
            <em>  <Link to="/Home" ><HomeIcon fontSize="large"/></Link></em>
          </MenuItem>
          <MenuItem value="">
            <em>  <Link to="/frnds" ><PeopleOutlineOutlinedIcon           fontSize="large"  /></Link></em>
          </MenuItem>
          <MenuItem value="">
            <em>  <Link to="/video" ><SubscriptionsOutlinedIcon fontSize="large"/></Link></em>
          </MenuItem>
          <MenuItem value="">
            <em>  <SupervisedUserCircleOutlinedIcon     onClick={()=>setbuttonpopup(true)}  fontSize="large"/>
<Fnpopup   trigger={buttonpopup} setTrigger={setbuttonpopup}/></em>
          </MenuItem>
          <MenuItem value="">
            <em> <Link to="/Rendereg" ><NfcOutlinedIcon fontSize="large"/></Link></em>
          </MenuItem>
        </Select>
      </FormControl>
      </div>
              
            </div> 
            <div className="header_middle">


            <div className="header_option  header_option--active">
            <Link to="/Home" ><HomeIcon fontSize="large"/></Link>

</div>
<div className="header_option">
<Link to="/frnds" ><PeopleOutlineOutlinedIcon           fontSize="large"  /></Link>

</div>
<div className="header_option">
<Link to="/video" ><SubscriptionsOutlinedIcon fontSize="large"/></Link>

    
</div>
<div className="header_option">
<SupervisedUserCircleOutlinedIcon     onClick={()=>setbuttonpopup(true)}  fontSize="large"/>
<Fnpopup   trigger={buttonpopup} setTrigger={setbuttonpopup}/>
</div>
<div className="header_option">
<Link to="/Rendereg" ><NfcOutlinedIcon fontSize="large"/></Link>

</div>
            </div>
            <div className="header_right">
<div className="header_info">
    <Avatar src={pic}/>
    <h4>{user}</h4>
</div>
<IconButton>
<DialpadIcon/>
</IconButton>
<IconButton>
<MessageIcon/>
</IconButton>
<IconButton>
<NotificationsIcon/>
</IconButton>
{/* <IconButton>
<ArrowDropDownIcon/>
</IconButton> */}
             
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label"></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
         
         
         
        >
          <MenuItem value="">
            <em><button onClick={logout}>Logout</button></em>
           
          </MenuItem>
          
        </Select>
      </FormControl>
     
            </div>
            <div>
               
             
            </div>
                    
                    </div> 
                      
       
    )
}

export default Header
