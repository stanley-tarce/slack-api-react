import React from 'react'
import './TitleBarUser.css'
import { useParams } from 'react-router'
function TitleBarUser({ userData }) {
    let name = userData.uid.split('@')[0]
    return (
        <div className={"main-header-user1"}>
            <div className={"label-user1"}>
                <p>{userData.uid}</p>
            </div>

        </div>
    )
}

export default TitleBarUser
