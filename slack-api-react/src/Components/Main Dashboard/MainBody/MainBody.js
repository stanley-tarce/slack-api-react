import React from 'react'
import './MainBody.css'
import MessageContainer from '../MessageContainer/MessageContainer'
import TitleBar from '../TitleBar/TitleBar'

function MainBody() {
    return (
        <div className={"main-body"}>
            <TitleBar />
            <MessageContainer />
        </div>
    )
}

export default MainBody
