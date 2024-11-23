import React,{useState} from "react";
import axios from "axios";
import "./searchBox.css"

const SearchBox=()=>{
    const [showComponent,setShowComponent]=useState(false)
    const[selectedOption,setselectedOption]=useState('');
    const[search,setSearch]=useState('');

    const handleChange=(e)=>{
        setselectedOption(e.target.value)
    }

    const onSearch=async(search)=>{
        setShowComponent(false)
        try{
            const response=await axios.get(
                `http://localhost:3000/search/${search}`);
                setShowComponent(response.data[0]);
            
        }
        catch(error){
            console.error("Error fetching personal Details:",error)

        }

    }


    return(
        <div className="search-div">
        <input placeholder="search by name" value={search}
        onChange={(e)=>setSearch(e.target.value)} onSubmit={onSearch}/>
        <select value={selectedOption} onChange={handleChange} >
            <option value=''>Select Brand</option>
            <option value='all' >Add Shop</option>
            <option value='name'>Toyata</option>
            <option value='contact'>Hundai</option>
            <option value='location'>Others</option>
            
        </select>
        </div>
    )
  
}
export default SearchBox;


