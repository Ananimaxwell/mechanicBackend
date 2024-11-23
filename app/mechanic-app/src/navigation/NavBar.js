import React from "react";
import { Link } from 'react-router-dom';
import "../HomePage.css"


const NavBar=()=>{

    return(
        <>
        <div className="nav"  >
            <div>MECHANIC BOOKING </div>
            <ul>
                <li><Link to="/Homepage">HomePage</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>  
        </>
    )
}
export default NavBar;