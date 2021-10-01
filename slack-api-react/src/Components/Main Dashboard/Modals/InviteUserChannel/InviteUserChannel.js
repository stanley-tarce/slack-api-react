import React from 'react'
import './InviteUserChannel.css'
import ChannelCard from '../../Sidebar/ChannelCard/ChannelCard'
import apiHooks from '../../../API/API'

function InviteUserChannel({ channelList, setChannelData, userDetails, channelData, header }) {
    const { channelId } = channelData
    const { id } = userDetails
    const { postInviteUserToChannel } = apiHooks()
    const sendInviteChannel = (event) => {
        event.preventDefault()
        let data = {
            id: channelId,
            member_id: id
        }
        console.log(data)
        postInviteUserToChannel(header, data)
    }
    return (
        <div className={"inviteChannelModalBackground"}>
            <div className={"inviteChannelContainer"}>
                <p>Select a Channel</p>
                <div className={"channelContainer"}>

                    {channelList.length !== 0 && channelList.map((channel, index) => <ChannelCard channelData={channelData} setChannelData={setChannelData} key={index} name={channel.name} channelId={channel.channelId} owner={channel.owner} />)}
                </div>

                <button onClick={(e) => sendInviteChannel(e)}>Send Invite</button>
            </div>
        </div>
    )
}

export default InviteUserChannel
