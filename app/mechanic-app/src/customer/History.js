import React, {lazy} from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import "./MechanicList.css"
import { Link } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import { FiMapPin,FiMail,FiPhone,FiShoppingBag,FiInfo,FiHeart } from "react-icons/fi";

const UserHistory=()=>{
    const[users,setUsers]=useState([]);
    const[filteredNames,setFilteredNames]=useState([])
    const [searchTerm,setSearchTerm]=useState('')
    const[shoComponent,setShoComponent]=useState('');
    const[selectedOption,setselectedOption]=useState('');
    

    const fetchNames=async()=>{
        try{
            const response= await axios.get("http://localhost:3300/api/sprayer");
            const namesArray=response.data.map(user=>user.shop_name);
            setUsers(namesArray);
            setFilteredNames(namesArray);
        }
        catch(error){
            console.error("Error fetching names",error);
        }
    }


    //Getting individual details
    const handleSubmit=async(name)=>{
        try{
            const response=await axios.get(
                `http://localhost:3300/people/${name}`);
                setShoComponent(response.data[0]);
            
        }
        catch(error){
            console.error("Error fetching personal Details:",error)

        }
    }

    return(
        <div className="mec">
        <NavBar/>
        <div className="search-div">
        <button>History</button>
        <button>favourite</button>
        </div>
       
        <div className="mec-Container">
        <div className="mechContainer">
        
            {filteredNames.map((name,index)=>(
                <div 
                 key={index.id} onClick={()=>handleSubmit(name)}>
                    <div className="name"><h2>{name} </h2>
                    
                    
                    </div>

                </div>
            ))}   
        </div>
        <div className="person-detail"> 
        
        </div>
        </div>
       </div> 
    )
}
export default UserHistory; 