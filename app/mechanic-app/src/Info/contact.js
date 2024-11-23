import React  from "react";
import { Link } from 'react-router-dom';
import "./contact.css"
import NavBar from "../navigation/NavBar";

const Contact=()=>{

    return(
        <>
        <NavBar/>
         <div class="contact-content">
        <h1>Contacts</h1>
        <div class="address-holder">
            <p>
                MAXZI TECH COMPANY <br/>
                23,Macjin Street, Ghana<br/>
                North Industrial Area,<br/>
            </p>
            <h4>+233-249877332/597447322</h4>
            <h4>For more enqueries write to us at: ananimaxwell05@gmail.com</h4>
            <a href="https://wa.me/message/T4V2TX2GNSVAG1">Chat me</a>
        </div>

     </div>
        </>
       
    )
}

export default Contact;