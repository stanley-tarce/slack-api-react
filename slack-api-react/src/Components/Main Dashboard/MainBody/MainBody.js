import React from 'react'
import './MainBody.css'
import MessageContainer from '../MessageContainer/MessageContainer'
import TitleBar from '../TitleBar/TitleBar'
import MessageInput from '../MessageInput/MessageInput'

function MainBody() {
    return (
        <div className={"main-body"}>
            <TitleBar />
            <MessageContainer />
            <MessageInput />
        </div>
    )
}

export default MainBody
