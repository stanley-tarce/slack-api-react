import React from 'react'
import './ChannelUserContainer.css'

function ChannelUserContainer({ id, uid, openNewChannelLists, setOpenNewChannelLists, setNewChannelListSearch }) {
    const name = uid.split('@')[0]

    const sendData = (event) => {
        event.preventDefault()
        console.log(event.target.dataset.id)
        console.log(event.target.dataset.uid)
        setOpenNewChannelLists([...openNewChannelLists, { id: event.target.dataset.id, uid: uid }])
        setNewChannelListSearch('');
    }
    return (
        <div onClick={(e) => sendData(e)} data-id={id} data-uid={uid} className="channel-user-container">
            <p>{name}</p>
        </div>
    )
}

export default ChannelUserContainer
