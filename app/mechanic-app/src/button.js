import React,{useState} from "react";
import Login from "./LogIn";
import HomePage from "./HomePage";


const button=()=>{
    const [isLogin,setIslogin]=useState(false);

    const handleLogin=()=>{
        setIslogin(true)
    };
    return(
        <>
        {!isLogin?(
            <Login onLogin={handleLogin}/>
        ):(<HomePage/>)}
        
        </>
    )
}
export default button;