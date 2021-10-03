import React from 'react'
import './TitleBarUser.css'
function TitleBarUser({ userData }) {
    let name = userData.uid.split('@')[0]
    return (
        <div className={"main-header-user1"}>
            <div className={"label-user1"}>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default TitleBarUser
