import React,{useState} from "react";
import "./createAccount.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


const AccountCreation=()=>{
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[password2,setPassword2]=useState("");
    const[error,setError]=useState("");

    const submitDetails=(e)=>{
      e.preventDefault();
      if (password !==password2){
        setError("Passwords do not match");
        return;
      }
      //sending the user details
      axios.post("http://localhost:3300/api/users",{name,email,password})
      .then(response=>{
        console.log(response.data.message);
        setName('');
        setEmail('');
        setPassword('');
        setPassword2('');
        setError('');
        navigate('/dashboard',{state:{name}})

      })
      .catch(error=>{
        if (error.response){
          //The request was made and the server responded  with a status code that is not in the range 2xx
          console.error('Server error',error.response.data);
          setError('An error occurred on the server');
        }
        else if(error.request){
          // The request was made but no response was received
          console.error("No response from the server");
          setError("No response from the server");
        }
        else{
          //something happened in setting up the request that triggered an error
          console.error('Request error:', error.message);
          setError("Error while sending the request");
        }
      });


    };



    
    return(
      <body className="account-body">
        <div>
          {error && <p style={{color:"red"}}>{error}</p>}
          <form className="form" onSubmit={submitDetails}>
            <div className="form-container">
            <h1>Drivers Account </h1>  
             <label className="form-label" >Name:</label> 
             <input
             value={name} 
             onChange={event=>setName(event.target.value)}
             className="form-input"  type="text" required/>
            <label className="form-label">Email:</label>
            <input
            className="form-input"
             type="email"
             value={email} 
             onChange={(event)=>setEmail(event.target.value)} required/>

             <label className="form-label">Password:</label>
             <input 
             className="form-input"
             type="password" 
             value={password}
             onChange={(event)=>setPassword(event.target.value)} required/>
             <label className="form-label" >Confirm Password:</label>
             <input 
             className="form-input"
             type="password" 
             value={password2}
             onChange={(event)=>setPassword2(event.target.value)}/>
             <div className="form-button">
                <button type="submit">Submit</button>
                
             </div>
             <Link to="/login">Already have an account?</Link>


            </div>
          </form>
        </div>
      </body>
    )
}
export default AccountCreation;