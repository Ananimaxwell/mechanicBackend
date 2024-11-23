import React,{useState} from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import axios from "axios";


const ShopForm=()=>{
  const location=useLocation();
  const {name,password}=location.state ||{};
    const[shopName,setShopName]=useState('');
    const[region,setRegion]=useState('');
    const[contact,setContact]=useState('');
    const[District,setDistrict]=useState('')
    const[Worktype,setWorktype]=useState("");
    const[expert,setExpert]=useState('');
    const[about,setAbout]=useState('');
    const[error,setError]=useState('');
    const navigate=useNavigate();


    //POSTING SHOPS NAME
    const submitDetails=(e)=>{
        e.preventDefault();
        //sending the user details
        axios.post("http://localhost:3300/api/mechanic_id",{name,password})
        .then(response=>{
          const mechanicId=response.data.mechanic_id;

          axios.post('http://localhost:3300/api/addshop',{mechanicId,shopName,region,District,contact,Worktype,expert,about})
          .then(()=>{
            alert("Shop details added seccessfully!");
            setShopName('');
            setRegion('');
            setContact('');
            setDistrict('');
            setExpert('');
            setAbout('');
            navigate('/dashboard',{state:{name}})
          })
          .catch((error)=>{
            console.error("Error occur adding the shop")
          });
          
  
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
        <div  className="account-body">
           
            <form className="form" onSubmit={submitDetails}>
            <h2>Shop Details {name},{password}</h2>
                <div className="form-container">
                <label for="shop" className="form-label">Shop Name:</label>
                <input type="text" placeholder="Emma Mechanic shop"
                 className="form-input" value={shopName} 
                 onChange={(e)=>setShopName(e.target.value)} required/>

                <label for="region" className="form-label">Region:</label>
                <input type="text" placeholder="Volta,Central,Ashanti" 
                className="form-input" value={region}
                onChange={(e)=>setRegion(e.target.value)}required/>

               <label for="District" className="form-label">District:</label>
               <input type="text" placeholder="Ketu south, Talensi,Gomoa"
                className="form-input" value={District}
                onChange={(e)=>setDistrict(e.target.value)}required/>
            
              <label for="number" class="form-label">Contact:</label>
               <input type="contact" placeholder="024....332" 
               class="form-input" value={contact}
               onChange={(e)=>setContact(e.target.value)} required/>

              <label for="Adress" class="form-label">Worktype:</label>
              <input type="text" placeholder="car spraying,electrician,vulcanizer,others"
              value={Worktype}  class="form-input"
              onChange={(e)=>setWorktype(e.target.value)} required/>

              <label for="Adress" class="form-label">Expert In:</label>

              <select className="form-input" value={expert} onChange={(e)=>setExpert(e.target.value)} >
              <option value=''>Select Brand</option>
              <option value='All Cars' >All Cars</option>
              <option value='name'>Toyata</option>
              <option value='contact'>Hundai</option>
              <option value='location'>Others</option>
            
            </select>

              <label for="Adress" class="form-label">About:</label>
              <input type="text" placeholder="Info about yourself"
              value={about}  class="form-input"
              onChange={(e)=>setAbout(e.target.value)}/>



              <div className="form-button">
               <button type="submit">Submit</button>
                
            </div>
           
                </div>
            </form>
        </div>
    )
}
export default ShopForm;