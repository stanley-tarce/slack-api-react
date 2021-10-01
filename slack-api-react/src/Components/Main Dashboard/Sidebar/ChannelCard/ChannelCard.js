import React from 'react'
import './ChannelCard.css'

function ChannelCard({ channelId, owner, name, setChannelData, channelData }) {

    const retrieveData = (event) => {
        console.log(event)
        console.log(`ChannelID: ${event.target.dataset.channelid}`)
        console.log(`Name: ${event.target.dataset.name}`)
        console.log(`Owner: ${event.target.dataset.owner}`)
        setChannelData({
            ...channelData,
            channelId: event.target.dataset.channelid,
            name: event.target.dataset.name,
            owner: event.target.dataset.owner
        })
        // console.log(event.target.dataset.names)
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
