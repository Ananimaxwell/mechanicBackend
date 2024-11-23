import React from "react";
import "./box.css"
import {FiUserPlus,FiList,FiMonitor,FiBell} from "react-icons/fi"
import { Link,useNavigate,useLocation } from "react-router-dom";
import MecList from "./customer/MechanicList";
import NavBar from "./navigation/NavBar";
import SearchBox from "./navigation/searchBox";

const Box=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const {name,password}=location.state ||{};
    const handleLoad=()=>{
        alert("The Page is under Development");
    }
    return(
        <>
        <NavBar/>
        <h1 className="welcomeNote">Hello {name}, Welcome To The DashBoard <FiBell size={20} style={{color:"black",marginLeft:"25px"}}>Notification</FiBell></h1>
        <div className="container">
            <div className="box" onClick={()=>{navigate('/mechaniclist')}}>
                <span>
                 <h3 className="h3-area">Mechanics List   <FiList  className="icons"/></h3>
                </span>
                <p style={{fontSize:"25px"}}>_______________</p>
                <p>Check the list of the Mechanics and book them!!</p>
            </div>

            <div className="box" onClick={()=>navigate('/sprayer')}id="spray-box">
                <span className="mini-portion">
                   <h3>Car Sprayers<FiMonitor className="icons" /> </h3>
                <h2 style={{textAlign:"center",fontSize:"25px"}}></h2>
                </span>
                <p style={{fontSize:"25px"}}>_______________</p>
                <p>Check the list of the Car Sprayers and book them!!</p>
            </div>
         

            <div className="box" onClick={()=>{navigate("/profile",{state:{name}})}}>
            <span>
            <h3>Profile Detail <FiUserPlus className="icons"/></h3>

            </span>    
                <p style={{fontSize:"25px"}}>_______________</p>
                <p>Check your details and update them!!</p>

            </div>

            

            <div className="box" onClick={()=>navigate("/hundai")} id="hundai-box">
               <span>
                <h3 style={{textAlign:"center",fontSize:"25px"}}>Hundai Products</h3>
                </span>
                <p style={{fontSize:"25px"}}>_______________</p>
                <p>Check the list of the Hundai Mechanics and book them!!</p>
            </div>

            
            <div className="box" onClick={()=>navigate('/toyota')}>
              <span>
                <h3 style={{textAlign:"center",fontSize:"25px"}}>Toyota Products</h3>
                </span>
                <p style={{fontSize:"25px"}}>_______________</p>
                <p>Check the list of the Toyota Mechanics and book them!!</p>
            </div>
            <div className="box" onClick={handleLoad}>
            
               <span>
                <h3 style={{textAlign:"center",fontSize:"25px"}}>History</h3>
                </span>
                <p style={{fontSize:"25px"}}>_______________</p>
                <p>Access both summary and detailed statement!!</p>
            </div>
            

        </div>
        </>
    )
}
export default Box;