import React, { useState } from "react";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {

const [email,setEmail] = useState ("")
const [password,setPassword] = useState ("")

const handleLogin = (email, password) =>{
      
}
  return ( 
  
  <div>
        <label>email: <input type = "eamil" value = {email} name = "eamil" onChange  = {(e) => setEmail(e.target.value)}/></label>
        <label>password: <input type = "password" value = {password} name = "password"  onChange  = {(e) => setPassword(e.target.value)}/></label>
        <button onClick = {handleLogin}>login</button>
  
  </div>
  )
};

export default Login;
