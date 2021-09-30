import React from 'react'
import './ChannelCard.css'

function ChannelCard({ index, channelId, owner, name }) {

    const retrieveData = (event) => {
        console.log(`ChannelID: ${event.target.dataset.channelId}`)
        console.log(`Name: ${event.target.dataset.name}`)
        console.log(`Owner: ${event.target.dataset.owner}`)
        // console.log(event.target.dataset.names)
    }
    return (
        <div onClick={(e) => retrieveData(e)}
            data-owner={owner}
            data-channelId={channelId}
            data-name={name}
            data-names={'hello'}
            key={index}
            className={"channelCard"}>
            <div></div>
            <p>{name}</p>
        </div>
    )
}

export default ChannelCard
