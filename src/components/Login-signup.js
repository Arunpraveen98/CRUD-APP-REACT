
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import "./login.css";

function LoginPage() {

  const history = useHistory();
  const [USERNAME,setUSERNAME]=useState("");
  const [PASSWORD,setPASSWORD]=useState("");
  const [verify,setVerify]=useState(true);
//------------------------------------------------------------------------
//? Default username and password object...
const Login_Data =[
  {
    "username":"@gmail.com",
    "password":"@123"
  }
]
//------------------------------------------------------------------------
//? verifying username and password and set it to localstorage...
const login_details=()=>{

  const input_name=USERNAME.split("@");
  const result_name=input_name[0];

if(USERNAME=== `${result_name}${Login_Data[0].username}` && PASSWORD===`${result_name}${Login_Data[0].password}`){
  localStorage.setItem("user_name",`${result_name}${Login_Data[0].username}`);
  setVerify(true);
  history.push("/addData")
}
else{
  setVerify(false);
}

//------------------------------------------------------------------------



}

  return (

    <div className="login-container">
     <p className="login-title">PLEASE LOGIN TO VIEW THE <br/>STUDENT DATABASE</p>

        <div className="box">

        <div className="form">
          
          <h2><LoginIcon sx={{ fontSize: 40 }} className="login-icon"/>Login</h2>
          <div className="inputBox">
            <input type="text" required="required" onChange={(event)=>setUSERNAME(event.target.value)} value={USERNAME}/>
            <span>Username : (YourName)@gmail.com</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" required="required" onChange={(event)=>setPASSWORD(event.target.value)} value={PASSWORD}/>
            <span>Password : (YourName)@123</span>
            <i></i>
          </div>
         
        
          <button type="button" className="login-btn card-btn" onClick={() => login_details()}>
             LOGIN
          </button>
          {verify ? "" : <b className="invalid">Wrong username or password.</b>}

        </div>

      </div>
      
    </div>
      
  
  );
}

export default LoginPage;
