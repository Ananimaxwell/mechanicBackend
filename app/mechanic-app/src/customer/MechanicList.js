import React, {lazy} from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import "./MechanicList.css"
import { useNavigate } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import { FiMapPin,FiMail,FiPhone,FiShoppingBag,FiInfo,FiHeart} from "react-icons/fi";


const MecList=()=>{
    const navigate=useNavigate();
    const[users,setUsers]=useState([]);
    const[filteredNames,setFilteredNames]=useState([])
    const [searchTerm,setSearchTerm]=useState('')
    const[shoComponent,setShoComponent]=useState('');
    const[selectedOption,setselectedOption]=useState('');
    
    //booking variables
    const[customerId, setcustomerId]=useState('');
    const[mechanicId, setMechanicId]=useState();
    const[shopId, setshopId]= useState('');
    const[error,setError]=useState('');

    const onChat=()=>{
        navigate("/startChat")
    }
    
//fetching all mchanics from the database
    const fetchNames=async()=>{
        try{
            const response= await axios.get("http://localhost:3300/api/get");
            const namesArray=response.data.map(user=>user.shop_name);
            setUsers(namesArray);
            setFilteredNames(namesArray);
        }
        catch(error){
            console.error("Error fetching names",error);
        }
    };

    
   
    useEffect(()=>{
        fetchNames();
    },[])

    //Update the flteredNames state based on the search
    useEffect(()=>{
        const filtered=users.filter(name=> 
            name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredNames(filtered);
    },[searchTerm,users]);


    //Getting individual details
    const handleSubmit=async(name)=>{
        try{
            const response=await axios.get(
                `http://localhost:3300/people/${name}`);
                setShoComponent(response.data[0]);
                setMechanicId(shoComponent.mechanic_id)
            
            
        }
        catch(error){
            console.error("Error fetching personal Details:",error)

        }
    }

    const onBook=(e)=>{
        e.preventDefault();
        
        
        //sending the user details
        axios.post("http://localhost:3300/api/book",{customerId,mechanicId,shopId})
        .then(response=>{
          console.log(response.data.message);
          
          navigate("/addShop",{state:{}})
  
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
        <div className="mec">
        <NavBar/>
        <div className="search-div">
        <input placeholder="search by name" value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} className="searchBox" />
        <select value={selectedOption} onChange={(e)=>setselectedOption(e.target.value)} >
            <option value=''>Select Brand</option>
            <option value='all' >Add Shop</option>
            <option value='name'>Toyata</option>
            <option value='contact'>Hundai</option>
            <option value='location'>Others</option>
            
        </select>
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
        {shoComponent && (<div>
            <img src={shoComponent.image}  alt=""/>
            <h2 className="h">{shoComponent.name} {mechanicId}</h2>
            <h3 className="detail"><FiShoppingBag/> {shoComponent.shop_name}</h3>
            <h3 className="detail"><FiMail/> <a href={shoComponent.email}>{shoComponent.email}</a> </h3>
            <h3 className="detail"><FiPhone/>  {shoComponent.contact}</h3>
            <h3 className="detail"><FiPhone/>Expertise:  {shoComponent.expert}</h3>
            <h3 className="detail"><FiPhone/>Worktype:  {shoComponent.worktype}</h3>
            
            <h3 className="detail"><FiInfo/> {shoComponent.about} </h3>
            <h3 className="detail"><FiMapPin/> {shoComponent.region}, {shoComponent.district}</h3>
           
            <button className="chat" onClick={
                onChat}> Chat</button>
            <button className="fav" onClick={()=>
            alert("Add to favourite!!")}><FiHeart/></button>
            <button className="book" onClick={onBook}>Book</button>
            
        </div>)}
        </div>
        </div>
       </div> 
    )
}
export default MecList;