import React from 'react'
import { useParams } from 'react-router'
import './TitleBarChannel.css'
import useravatar from './Assets/UserAvatar.svg'

// ! PROPS FOR THE AVATAR
// 1. Pass a props with a string value of either user or group. if user -> avatar image else lock

function TitleBarChannel({ channelData, setOpenChannelListMembers }) {
    const { channel_members } = channelData

    return (
        <div className={"main-header"}>
            <div className={"label"}>
                <div className={`avatar`} />
                <p>{channelData.name}</p>
            </div>
            <div onClick={() => setOpenChannelListMembers(true)} className={"channel-list"}>
                <div className={"avatar-count"}>
                    {channel_members.length === 1 && channel_members.map(() => <img src={useravatar} alt={'user'} className="avatar-image1" />)}
                    {channel_members.length === 2 && <>
                        <img src={useravatar} alt={'user'} className="avatar-image2" />
                        <img src={useravatar} alt={'user'} className="avatar-image2" />
                    </>}
                    {channel_members.length === 3 && <> <img src={useravatar} alt={'user'} className="avatar-image3" />
                        <img src={useravatar} alt={'user'} className="avatar-image3" />
                        <img src={useravatar} alt={'user'} className="avatar-image3" /></>}
                    {channel_members.length >= 4 && <>  <img src={useravatar} alt={'user'} className="avatar-image4" />
                        <img src={useravatar} alt={'user'} className="avatar-image4" />
                        <img src={useravatar} alt={'user'} className="avatar-image4" />
                        <img src={useravatar} alt={'user'} className="avatar-image4" /></>}

                </div>
                <p className={"list"}>{channel_members.length}</p>
            </div>
        </div>
    )
}

export default TitleBarChannel
