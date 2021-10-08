import React from 'react'
import './MainDisplay.css'
import Coverphoto from '../Main Display/assets/yellow2.svg'

function MainDisplay() {
    return (
        <div className={"front-display"}>
            <div className={"main-display"}>
                <div className={"cover-photo"}>
                 <img src={Coverphoto} alt="Coverphoto" />
                </div>
            <div className={"welcome-message"}>
                <h1 className={"user-greeting"}>Hi, User!</h1>       
                <h3 className={"message-greeting"}>You’re here! The day just got better. This is Slack, the messaging app for teams at work. Let’s get you started. </h3>
            </div>
            
            </div>
        </div>
    )
}

export default MainDisplay
