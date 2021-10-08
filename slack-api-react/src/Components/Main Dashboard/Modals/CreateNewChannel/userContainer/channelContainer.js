import React from 'react'
import './channelContainer.css'

function ChannelUserContainer({
    id,
    uid,
    openNewChannelLists,
    setOpenNewChannelLists,
    setNewChannelListSearch,
    setFeedback,
    setToast,
    setOutcome }) {
    const name = uid.split('@')[0]

    const sendData = (event) => {
        event.preventDefault()
        console.log(event.target.dataset.id)
        console.log(event.target.dataset.uid)
        let checkDuplicate = [...openNewChannelLists]
        event.preventDefault()
        let counts = 0
        if (checkDuplicate.length !== 0) {
            checkDuplicate.forEach(duplicate => {
                if ((duplicate.id === event.target.dataset.id) && (duplicate.uid === event.target.dataset.uid)) {
                    counts = counts + 1
                }
            })
        }
        if (counts === 0) {
            setOpenNewChannelLists([...openNewChannelLists, { id: event.target.dataset.id, uid: uid }])
            setNewChannelListSearch('')
        }
        else {
            setNewChannelListSearch('');
            //Insert error handling here
            setToast(true)
            setFeedback(['Duplicate entry found'])
            setTimeout(() => setToast(false), 3000)
            setOutcome('error')
        }
    }
    return (
        <div onClick={(e) => sendData(e)} data-id={id} data-uid={uid} className="channel-user-container">
            <p>{name}</p>
        </div>
    )
}

export default ChannelUserContainer
