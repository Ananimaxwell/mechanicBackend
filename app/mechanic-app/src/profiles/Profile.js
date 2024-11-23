import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./Profile.css"
import { FiEdit } from "react-icons/fi";
import axios from "axios";


const Profile=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const username=(location.state && location.state.name) ||'';
    const[name,setName]=useState(null)
    const[selectedOption,setselectedOption]=useState('');

    const handleChange=(e)=>{
        setselectedOption(e.target.value)
    }

    useEffect((id=1)=>{
        axios.get(`http://localhost:3300/individual/:id/get/${id}`).then((result)=>{
            setName(result.data[0])
        });
    },[])



    return(
        <form className="form">
        <div className="profile-container">
            <img alt="pic" src="./learn.jpg" className="image"/>
        <h2 >{username} Profile picture</h2>
        <select value={selectedOption} onChange={handleChange} className="select">
            <option value=''>Select Option</option>
            <option value='all'>Add Shop</option>
            <option value='name'>Update Name</option>
            <option value='contact'>Update Contact</option>
            <option value='location'>Update Locaton</option>
            
        </select>
        <div className="page-container">
       <h2 className="edit">Edit Name <FiEdit/> </h2>
        <div className="section">
            <div className="sub-div">
                <label className="form-label">NAME:</label>
                <input type="text" placeholder="your name here" className="form-input"/>
            </div>
            <div className="sub-div">
            <label className="form-label">SHOP NAME:</label>
            <input type="text" placeholder="your business name here" className="form-input"/>
               
            </div>
            <button  className="profile-btn">UPDATE</button> 
        </div>
        <h2 className="edit">Edit Contact <FiEdit/></h2>
        <div className="section">
            <div className="sub-div">
            <label className="form-label">CONTACT:</label>
            <input type="text" className="form-input" />
            </div>
            <div className="sub-div">
            <label className="form-label">EMAIL:</label>
            <input type="email" placeholder="your email here" className="form-input"/>
            </div>
            <button  className="profile-btn">UPDATE</button> 
        
        </div>
        <h2 className="edit">Edit Locaton <FiEdit/></h2>
        <div className="section">
            <div className="sub-div">
            <label className="form-label">REGION:</label>
            <input type="text" placeholder="your region here" className="form-input"/>
            </div>
            <div className="sub-div">
            <label className="form-label">TOWN:</label>
            <input type="text" placeholder="your town here" className="form-input"/>
            </div>
            <button  className="profile-btn">UPDATE</button> 
        </div>
        <button>LogIn</button>
       </div>
       </div>
       </form> 
       
      )

}
export default Profile;
