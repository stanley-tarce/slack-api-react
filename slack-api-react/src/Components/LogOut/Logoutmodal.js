import React from 'react'
import Logout from '../LogOut/Logout'
import "../Main Dashboard/MainNavBar/MainNavBar.css"
import "../Main Dashboard/Hooks/MainHooks"
import "../LogOut/Logoutmodal.css"
import usericon from "../LogOut/usericon/usericon.svg"

const Logoutmodal = ({openLogoutModal, setOpenLogoutModal}) => {
    
    return (
        
        <div className="logoutmodal"> 
            <div className="logoutCard">
            <span className="userImage">
              <img src={usericon} className="imageBorder" alt="usericon"/>
            </span>
            <div className="accountName">
                <h2 className="userName">User</h2>
                <h5 className="userEmail">anonymous@company.com</h5>
            </div>

            <div className="userLogout">
            <button type="button" className="singoutButton" onclick="">Sign Out</button>
            {/* { <button onClick={userLogout} type="submit"> Sign Out </button>} */}
           </div>

            </div>

        <Logout/> 
          
    
       </div> 
            
    )
}

export default Logoutmodal
