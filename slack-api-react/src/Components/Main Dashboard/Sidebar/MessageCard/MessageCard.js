import React from 'react'
import './MessageCard.css'
import apiHooks from '../../../API/API'
import { useHistory } from 'react-router-dom'

function MessageCard({ id, setCreateMessageContainer, uid, userData, setUserData, setMode }) {
    let name = uid.split('@')[0]
    const history = useHistory()
    const retrieveUserData = (event) => {
        event.preventDefault()
        setUserData({
            ...userData,
            id: event.target.dataset.id,
            uid: event.target.dataset.uid
        }
        )
        setCreateMessageContainer([])
        setMode('User')
        history.push(`/main/messaging/User/${event.target.dataset.id}`)

    }
    return (
        <div className={"messageCard"} onClick={(e) => retrieveUserData(e)} data-uid={uid} data-id={id}>
            <div></div>
            <p>{name}</p>
            <div className={"Remove"}></div>
        </div>
    )
}

export default MessageCard
