import React from 'react'
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './frnd.css';
import { Avatar } from '@mui/material';
export const Friendlist = () => {
    const pdt=useSelector((state)=>state.allProducts.friendlist);
    
    const renderList=pdt.map((friend)=>{
       
        const {dp,image,username}=friend;
        console.log(username,image,dp);
    return (
        <div >
            <div className="home">
      
      <Card  className="col-3" style={{  height: "350px",
  width:" 350px"}} spacing={3} xs={6}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center",display:"flex"}}>
        <Avatar src={dp}/>
        {username}
        </Typography>
       
      </CardContent>
      <CardActions>
      <Button variant="outlined">Add Friend</Button>
      <Button variant="outlined">Remove</Button>
      </CardActions>
    </Card>
         
    
    </div> 
      
    </div>
        
    )
}

);
return(
<>{renderList}</>
);
};