import React from "react";
import { Link } from 'react-router-dom';
import "./service.css"
import NavBar from "../navigation/NavBar";

const Service=()=>{
    return(
        <>
        <NavBar/>
        <div class="service-content">
        <h1>Services</h1>
        <div class="card-container">
            <ul>
                <li>
                    <img src="https://via.placeholder.com/200X130" alt="pic"/>
                    <p>At Maxzi Technology our constant endeavor is to innovate and create top quality products
                        and services.Here are few milestones we have achieved in our pursuit for excellence.
                    </p>

                </li>
                <li>
                    <img src="https://via.placeholder.com/200X130" alt="pic"/>
                    <p>At Maxzi Technology our constant endeavor is to innovate and create top quality products
                        and services.Here are few milestones we have achieved in our pursuit for excellence.
                    </p>

                    
                </li>
                <li>
                    <img src="https://via.placeholder.com/200X130" alt="pic"/>
                    <p>At Maxzi Technology our constant endeavor is to innovate and create top quality products
                        and services.Here are few milestones we have achieved in our pursuit for excellence.
                    </p>
                    
                </li>
            </ul>
        </div>

     </div>

        </>
            )
}
export default Service;