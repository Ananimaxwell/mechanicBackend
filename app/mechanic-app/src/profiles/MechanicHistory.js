import React, {lazy} from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import "./MechanicList.css"
import NavBar from "../navigation/NavBar";
import { FiMapPin,FiMail,FiPhone,FiShoppingBag,FiInfo } from "react-icons/fi";

const MechanicHistory=()=>{
    const[history,setHistory]=useState([]);
    const[showDetail,setDetail]=useState(null);

    
   
    useEffect(()=>{
        axios.get("http://localhost:3000/api/get").then((result)=>{
            setHistory(result.data)
        });
    },[])
    const handleSubmit=async(name)=>{
        try{
            const response=await axios.get(
                `http://localhost:3000/people/${name}`);
                setDetail(response.data[0]);
            
        }
        catch(error){
            console.error("Error fetching personal Details:",error)

        }
    }

    return(
        <>
        <NavBar/>
        <div className="mec-Container">
        <div className="mechContainer">
        
            {users.map((item)=>(
                <div 
                 key={item.id} onClick={()=>handleSubmit(item.name)}>
                    <div className="name"><h2>{item.name } </h2>
                    
                    
                    </div>

                </div>
            ))}   
        </div>
        <div className="person-detail"> 
        {shoComponent && (<div>
            <img src={shoComponent.image} alt=""/>
            <h2 className="h">{shoComponent.name}</h2>
            <h3 className="detail"><FiShoppingBag/> {shoComponent.shop}</h3>
            <h3 className="detail"><FiMail/> <a href={shoComponent.email}>{shoComponent.email}</a> </h3>
            <h3 className="detail"><FiPhone/>  {shoComponent.contact}</h3>
            <h3 className="detail"><FiInfo/> {shoComponent.about} </h3>
            <h3 className="detail"><FiMapPin/>  {shoComponent.region}, {shoComponent.town}</h3>
           
            <button> Chat</button>
            
        </div>)}
        </div>
        </div>
       </> 
    )
}
export default MechanicHistory; 