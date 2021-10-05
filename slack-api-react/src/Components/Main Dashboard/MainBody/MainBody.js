import React from 'react'
import './MainBody.css'
import MessageContainer from '../MessageContainer/MessageContainer'
import TitleBarChannel from '../TitleBarChannel/TitleBarChannel'
import TitleBarUser from '../TitleBarUser/TitleBarUser'
import MessageInput from '../MessageInput/MessageInput'
import { Switch, Route } from 'react-router'




function MainBody({ channelData, mode, createMessageContainer, setMode, setCreateMessageContainer, header, message, setMessage, userData, setOpenChannelListMembers, }) {
    return (
        <div className={"main-body"}>
            <Switch>
                <Route
                    path={`/main/messaging/channel/:channelID`}>
                    <TitleBarChannel
                        channelData={channelData} setOpenChannelListMembers={setOpenChannelListMembers} />
                </Route>
                <Route
                    path={`/main/messaging/user/:id`}>
                    <TitleBarUser
                        userData={userData} />
                </Route>
            </Switch>

            <MessageContainer
                mode={mode}
                createMessageContainer={createMessageContainer}
                setMode={setMode}
                channelData={channelData}
                header={header}
                setCreateMessageContainer={setCreateMessageContainer}
                userData={userData} />
            <MessageInput
                mode={mode}
                channelData={channelData}
                header={header} message={message}
                userData={userData}
                setMessage={setMessage} />
        </div>
    )
}

export default MainBody
