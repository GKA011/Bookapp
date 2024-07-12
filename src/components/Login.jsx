import {  Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    function popup(){
        alert('successfull login')
    }
  return (
    <div>
        <div>
            <h1>Login</h1>
        </div>
    <div>
      <TextField id="outlined-basic" label="Username" variant="outlined" sx={{width:'300px'}} />
    </div>
    <div>
    <TextField sx={{width:'300px',marginTop:"9px"}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
    </div>
    <div>
    <Link onClick={popup} to={'/allbooks'}><Button sx={{marginTop:"9px"}} variant="contained">Login</Button></Link> 
    </div>
    <div>
    <a href='http://localhost:5173/signup' style={{color:"black"}}>Don't have an account ?</a><br />
    </div> 
    </div>
  )
}

export default Login