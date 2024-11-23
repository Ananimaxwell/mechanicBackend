import React from "react";
import { Link } from 'react-router-dom';
import "./about.css"
import NavBar from "../navigation/NavBar";

const About=()=>{

    return(
        <>
        <NavBar/>
        <div class="about-content">
        <h1>About us</h1>
        <p>Maxzi Technology is dedicated to develop and market next generation IT products 
            and to carry out technical innovation for trade, industry and public at large.
            Maxzi Technology is based in Accra, and brings together the craft of software,
            education and service design. Founded in 2020, Maxzi's products spread across  
            the country.

        </p>

     </div>
        
        </>
        
    )
}
export default About;