import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"
import Login from "./LogIn";
const HomePage=()=>{
    
    return(
        <>
        <div className="home">
         <div className="nav"  >
            <div>MAXZI TECHNOLOGY</div>
            <ul>
                <li><Link to="/Homepage">HomePage</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
            

         </div>
         <div className="middle">
          <p id="man">Open an account to have access to Maxzi Software</p>
           <Link to="/CreateAccount">
           <button id="accBut"> Create account</button>
           </Link>
           <Link to="/Login">
           <button id="creAccBut">Have Account Already</button>
           </Link>
           
         </div>
         <div className="tagline">
           <div>
            <h1>Maxzi Technology</h1>
            <h2>Software Innovation </h2>
           </div>
           </div>
           

           </div>
       
      

        </>
    )
}
export default HomePage;