import { AppBar, Button ,  Stack,  Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <AppBar>
       <Toolbar >
        <Typography variant='h5' component='div' sx={{flexGrow:1,textAlign:"left",fontWeight:"bold",fontSize:'32px'}}>
            LIT HUNT
        </Typography>
        <Stack direction='row' spacing={2}>
        <Link to={'/'}> <Button  sx={{fontSize:"16px",color:"white"}}>Home</Button></Link>
        <Link to={'/allbooks'}>  <Button  sx={{fontSize:"16px",color:"white"}}>AllBooks</Button></Link>
           <Link to={'/signup'}> <Button  sx={{fontSize:"16px",color:"white"}}>Signup</Button></Link>
           <Link to={'/login'}> <Button  sx={{fontSize:"16px",color:"white"}}>Login</Button></Link>
        </Stack>
       </Toolbar>
    </AppBar>
    
  )
}

export default Navbar