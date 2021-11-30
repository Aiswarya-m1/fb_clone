import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyle=makeStyles((theme)=>({
    Logo_lg:{} ,
    Logo_sm:{}
}));
const Hdr = () => {
    const classes=useStyle();
    return (
        <div>
           <AppBar>
               <Toolbar>

                   <Typography variant="h6" className={classes.Logo_lg}>Lama dev</Typography>
                   <Typography variant="h6" className={classes.Logo_sm}>Lama </Typography>
               </Toolbar>
               
               </AppBar> 
        </div>
    )
}

export default Hdr
