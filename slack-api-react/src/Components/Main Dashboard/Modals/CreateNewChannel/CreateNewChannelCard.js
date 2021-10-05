import React from 'react'
import './CreateNewchannelCard.css'
import close from './assets/close.png'

function CreateNewChannelCard({ index, uid, setOpenNewChannelLists, openNewChannelLists }) {
    let name = uid.split('@')[0]
    const removeData = (event) => {
        event.preventDefault()
        var temp_array = [...openNewChannelLists]
        console.log(event.target.dataset.index)
        temp_array.splice(event.target.dataset.index, 1)
        setOpenNewChannelLists(temp_array)
    }
    return (
        <div className="channelcard">
            <img className="closebutton" data-index={index} src={close} onClick={(e) => removeData(e)} />
            <p className="add-name">{name}</p>
        </div>
    )
}

export default CreateNewChannelCard
