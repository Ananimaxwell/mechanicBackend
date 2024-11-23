import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./LogIn";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Box from "./Box";
import MecList from "./customer/MechanicList";
import Profile from "./profiles/Profile";
import "./app.css"
import AccountPage from "./createPage";
import MechanicForm from "./customer/mechnicForm";
import ShopForm from "./customer/shopForm";
import SearchBox from "./navigation/searchBox";
import Sprayer from "./customer/sprayer";
import ToyotaCars from "./customer/ToyotaCars";
import HundaiCars from "./customer/HundaiCars";
import About from "./Info/about";
import Contact from "./Info/contact";
import Service from "./Info/service";
import ChatBox from "./ChatBox";

import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client"

const socket = socketIO.connect("http://localhost:4001")
function App() {
  return (
    
        <div>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
                <Route path="/Homepage" element={<HomePage/>}/>
                <Route path="/CreateAccount" element={<AccountPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Box/>}/>
                <Route path="/mechaniclist" element={<MecList/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/mechanicAccount" element={<MechanicForm/>}/>
                <Route path="/addShop" element={<ShopForm/>}/>
                <Route path="/search" element={<SearchBox/>}/>
                <Route path="/sprayer" element={<Sprayer/>}/>
                <Route path="/toyota" element={<ToyotaCars/>}/>
                <Route path="/hundai" element={<HundaiCars/>}/>
                <Route path="/about"  element={<About/>}/>
                <Route path="/service"  element={<Service/>}/>
                <Route path="/contact"  element={<Contact/>}/>
               
               <Route path="/startChat" element={<ChatBox/>}></Route>
              
          </Routes>
    </div>
    
    
  );
}

export default App;
