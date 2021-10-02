import React from 'react'
import './MainBody.css'
import MessageContainer from '../MessageContainer/MessageContainer'
import TitleBarChannel from '../TitleBarChannel/TitleBarChannel'
import TitleBarUser from '../TitleBarUser/TitleBarUser'
import MessageInput from '../MessageInput/MessageInput'
import { Switch, Route } from 'react-router'
import ChannelCard from '../Sidebar/ChannelCard/ChannelCard'



function MainBody({ channelData, mode, createMessageContainer, setMode, setCreateMessageContainer, header, message, setMessage }) {
    return (
        <div className={"main-body"}>
            <Switch>
                <Route path={`/main/messaging/channel/:channelID`}>
                    <TitleBarChannel channelData={channelData} />
                </Route>
                <Route path={`/main/messaging/user/:id`}>
                    <TitleBarUser channelData={channelData} />
                </Route>
            </Switch>

            <MessageContainer mode={mode} createMessageContainer={createMessageContainer} setMode={setMode} channelData={channelData} header={header}
                setCreateMessageContainer={setCreateMessageContainer} />
            <MessageInput mode={mode} channelData={channelData} header={header} message={message} setMessage={setMessage} />
        </div>
    )
}

export default MainBody
