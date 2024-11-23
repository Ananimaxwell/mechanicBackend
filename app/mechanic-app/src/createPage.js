import React,{useState} from "react";
import Login from "./LogIn";
import AccountCreation from "./CreateAccount";
import "./createPage.css"
import NavBar from "./navigation/NavBar";
import MechanicForm from "./customer/mechnicForm";


const AccountPage=()=>{
    const[showCreateDriverAccount,setshowCreateDriverAccount]=useState(true);
    const[showCreateMechanicAccount,setshowCreateMechanicAccount]=useState(false);


    const handleDriverAccountClick=()=>{
        setshowCreateDriverAccount(true);
        setshowCreateMechanicAccount(false);

    };

    const handleMechanicAccountClick=()=>{
        setshowCreateMechanicAccount(true);
        setshowCreateDriverAccount(false);

    }

    return(
        <div>
            <NavBar/>
        <div className="Create_main_container">
            <div className="Create_btn_page">
                <button onClick={handleDriverAccountClick}>Driver Account</button>
                <button onClick={handleMechanicAccountClick}>Mechanic Account</button>
            </div>
            <div className="Create_form_page">
                {showCreateDriverAccount &&<AccountCreation/>}
                {showCreateMechanicAccount &&<MechanicForm/>}
            </div>
        </div>
        </div>
    )

}
export default AccountPage;