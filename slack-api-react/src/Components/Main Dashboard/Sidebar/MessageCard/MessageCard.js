import React, { useEffect } from 'react'
import './MessageCard.css'
import { useHistory } from 'react-router-dom'

function MessageCard({
    id,
    setCreateMessageContainer,
    uid,
    userData,
    setUserData,
    setMode,
    index,
    setUserMessageList,
    userMessageList }) {
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
    const removeUserData = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.dataset.index1)
        let newContainer = userMessageList
        newContainer.splice(event.target.dataset.index1, 1)
        console.log(newContainer)
        setUserMessageList(newContainer)
        let new1 = userMessageList
        console.log(`New State: ${new1}`)
    }

    useEffect(() => {
        console.log('MessageCard Changed')
    }, [userMessageList])


    return (
        <div className={'messageCardContainer'}>
            <div className={"messageCard"} onClick={(e) => retrieveUserData(e)} data-uid={uid} data-id={id}>
                <div className={"messageWrapper"}>
                    <div></div>
                    <p>{name}</p>
                </div>

            </div>
            <div className={"Remove"} data-index1={index} onClick={(e) => removeUserData(e)}></div>
        </div>
    )
}

export default MessageCard
