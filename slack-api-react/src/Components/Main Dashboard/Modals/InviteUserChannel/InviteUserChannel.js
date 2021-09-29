import React from 'react'
import './InviteUserChannel.css'
import ChannelCard from '../../Sidebar/ChannelCard/ChannelCard'

function InviteUserChannel() {
    return (
        <div className={"inviteChannelModalBackground"}>
            <div className={"inviteChannelContainer"}>
                <p>Select a Channel</p>
                <div className={"channelContainer"}>
                    <ChannelCard />
                    <ChannelCard />
                    <ChannelCard />
                    <ChannelCard />
                </div>
                <button>Send Invite</button>
            </div>
        </div>
    )
}

export default InviteUserChannel
