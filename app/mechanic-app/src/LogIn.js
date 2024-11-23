import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./createAccount.css"
import Footer from "./Footer";
import { Link } from "react-router-dom";
import NavBar from "./navigation/NavBar";

const Login=()=>{
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const [error,setError]=useState("");
    

    const handleSubmit=async (e)=>{
      e.preventDefault();
      try{
        const response= await axios.post("http://localhost:3300/api/login",{name,password
        });
        console.log('Login successfully');
        setError('successfully');
        navigate('/dashboard',{state:{name,password}})
      }
      catch(error){
        //handle error
        console.error("Login Error :",error);
        setError("Invalid Username or Password");
        setName('');
        setPassword('');
      
      }
    };

   
    
    return(
     <>
     <body className="account-body">
      <NavBar/>
        <div>

            <form className="form">
                
              <div className="form-container"> 
                 <h1>LogIn Page </h1>
                <label className="form-label">Username:</label>
                <input 
                className="form-input"
                placeholder="Enter full name"
                type="text"
                value={name}
                onChange={event=>setName(event.target.value)}
                />
                <label className="form-label">Password:</label>
                <input 
                type="password"
                className="form-input"
                placeholder="Enter Password"
                value={password}
                onChange={event=>setPassword(event.target.value)}
                />
                {error&& <p style={{color:"red"}}>{error}</p>}
                <div className="form-button">
                    <button onClick={handleSubmit}>LogIn</button>
                </div>
              </div>   
            </form>
        </div>
        </body>
        
      </>
    )
}
export default Login;