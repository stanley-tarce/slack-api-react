import React from 'react'
import Logout from '../LogOut/Logout'
import "../Main Dashboard/MainNavBar/MainNavBar.css"
import "../Main Dashboard/Hooks/MainHooks"

const Logoutmodal = ({openLogoutModal, setOpenLogoutModal}) => {
    
    return (
        
        <div className="logoutmodal"> 
            <div className="logoutCard">

            </div>

            <div className="userLogout">
            {/* <button onClick={userLogout} type="submit"> Sign Out </button>   */}
           </div>

            <div className="w3-container">
              <span onClick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
        <Logout/> 
          
          </div>
       </div> 
            
    )
}

export default Logoutmodal
