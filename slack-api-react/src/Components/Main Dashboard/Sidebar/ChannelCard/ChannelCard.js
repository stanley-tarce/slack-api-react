import React from 'react'
import './ChannelCard.css'
import { useHistory } from 'react-router'
import apiHooks from '../../../API/API'

function ChannelCard({ channelId, owner, name, setChannelData, channelData, header, setMode, redirectToChannel }) {
    const { getRetrieveChannel } = apiHooks()
    const history = useHistory()

    const retrieveData = async (event) => {
        const result = await getRetrieveChannel(header, event.target.dataset.channelid)
        console.log(event)
        console.log(`ChannelID: ${event.target.dataset.channelid}`)
        console.log(`Name: ${event.target.dataset.name}`)
        console.log(`Owner: ${event.target.dataset.owner}`)
        const { id, name, owner_id, channel_members } = result.data.data
        var channelDataMembers = []
        channel_members.map(member => channelDataMembers = [...channelDataMembers, { user_id: member.user_id }])
        setChannelData({
            ...channelData,
            channelId: id,
            name: name,
            owner: owner_id,
            channel_members: channelDataMembers
        })
        // console.log(event.target.dataset.names)
        console.log(result)
        if (redirectToChannel) {
            setMode('Channel')
            history.push(`/main/messaging/channel/${event.target.dataset.channelid}`)
        }
    }
    return (
        <div onClick={(e) => retrieveData(e)}
            data-owner={owner}
            data-channelid={channelId}
            data-name={name}
            data-names={'hello'}
            className={"channelCard"}>
            <div className={"picture"}></div>
            <p className={"name"}>{name}</p>
        </div>
    )
}

export default ChannelCard
