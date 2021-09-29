import React from 'react'
import './MessageContainer.css'
import MessageBox from '../Message Box/MessageBox'
import MessageInput from '../MessageInput/MessageInput'
function MessageContainer() {
    return (
        <div className={"Message-Container"}>
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
        </div>

    )

}

export default MessageContainer
