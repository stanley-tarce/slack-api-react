import React from 'react'
import { useParams } from 'react-router'
import './TitleBarChannel.css'

// ! PROPS FOR THE AVATAR
// 1. Pass a props with a string value of either user or group. if user -> avatar image else lock

function TitleBarChannel({ channelData }) {
    const { channel_members } = channelData

    return (
        <div className={"main-header"}>
            <div className={"label"}>
                <div className={`avatar`} />
                <p>{channelData.name}</p>
            </div>
            <div className={"channel-list"}>
                <div className={"avatar-count"}>
                    <img src={'./Assets/user-male.svg'} alt={'user'} />
                </div>
                <p className={"list"}>{channel_members.length}</p>
            </div>
        </div>
    )
}

export default TitleBarChannel
