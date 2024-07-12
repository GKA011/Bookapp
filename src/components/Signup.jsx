import { Box, Button, Checkbox, colors, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Signup = () => {
    function popup(){
        alert(' SUCCESSFULLY SIGNED IN')
    }


  return (
    
        <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch',marginLeft:'-70px'},
      }}
      noValidate
      autoComplete="off"
    >
        <div>
      <TextField id="outlined-basic" label="Name" variant="outlined" sx={{marginTop:"35px",width:'300px'}} />
      </div>
      <div>
      <TextField id="outlined-basic" label="Place" variant="outlined"sx={{width:'300px'}} />
      </div>
      <div>
      <TextField id="outlined-basic" label="Age" variant="outlined" sx={{width:'300px'}}/>
      </div>
      <div>
      <TextField id="outlined-basic" label="Email id" variant="outlined"sx={{width:'300px'}} />
      </div>
      <div>
      <TextField id="outlined-basic" label="Contact Details" variant="outlined"sx={{width:'300px'}} />
      </div>
      <div>
      <TextField id="outlined-basic" label="Phone number" variant="outlined" sx={{width:'300px'}}/>
      </div>
      <div style={{width:"230px"}}>
      <Checkbox {...label} /><small style={{wordSpacing:"1px"}}>I accept the terms & conditions</small>
    </div>
    <Link to={'/allbooks'}><Button onClick={popup} variant="contained">Signup</Button></Link><br></br>
    <small>Already have account ? <Link to={'/login'}><Button color='inherit' sx={{fontSize:'12px'}}>Login</Button></Link></small>
       
     </Box>
    
  )
}

export default Signup