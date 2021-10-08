import React from 'react'
import Logout from '../LogOut/Logout'
import "../Main Dashboard/MainNavBar/MainNavBar.css"
import "../Main Dashboard/Hooks/MainHooks"
import './Logoutmodal.css'
import usericon from "../LogOut/usericon/usericon.svg"
import { useHistory } from 'react-router'
import close from "../LogOut/usericon/close.png"

const Logoutmodal = ({ openLogoutModal, setOpenLogoutModal, header, setHeader }) => {
    const { uid } = header
    const name = uid.split('@')[0]

    let history = useHistory();
    const signOutButton = () => {
        setHeader(null)
        setOpenLogoutModal(false)
        history.push('/');
        console.log(header)
    }

    const closeModal = (event) => {
        event.preventDefault()
        setOpenLogoutModal(false)
    }
    return (

        <div className="logoutmodal">
            <div className="logoutCard">
                <div className="logout-close-container">
                    <img src={close} className="logout-close" onClick={closeModal}></img>
                </div>
                <span className="userImage">
                    <img src={usericon} className="imageBorder" alt="usericon" />
                </span>
                <div className="accountName">
                    <h2 className="userName">{name}</h2>
                    <h5 className="userEmail">{uid}</h5>
                </div>

                <div className="userLogout">
                    <button type="button" className="singoutButton" onClick={signOutButton}>Sign Out</button>
                    {/* { <button onClick={userLogout} type="submit"> Sign Out </button>} */}
                </div>

            </div>

            {/* <Logout/>  */}


        </div>

    )
}

export default Logoutmodal
