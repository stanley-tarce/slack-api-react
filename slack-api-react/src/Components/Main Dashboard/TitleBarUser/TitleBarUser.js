import React from 'react'
import './TitleBarUser.css'
import { useParams } from 'react-router'
function TitleBarUser() {
    const name = useParams()
    return (
        <div className={"main-header-user1"}>
            <div className={"label-user1"}>
                <p> {name}</p>
            </div>

        </div>
    )
}

export default TitleBarUser
