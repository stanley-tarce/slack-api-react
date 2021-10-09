import React, { useEffect, useState, useRef } from 'react'
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
    const refDiv2 = useRef(null)
    const [focus, setFocus] = useState('null')
    const retrieveUserData = (event) => {
        setFocus('focus')
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
    const CloseRefDiv = (ref) => {
        useEffect(() => {
            const handleCloseRefDiv = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setFocus('null')
                }
            }
            document.addEventListener("mousedown", handleCloseRefDiv)
            return () => document.removeEventListener("mousedown", handleCloseRefDiv)
        }
            , [ref])
    }
    CloseRefDiv(refDiv2)
    const removeUserData = (event) => {
        console.log(event)
        console.log(event.target.dataset.index1)
        var temp_array = [...userMessageList]
        temp_array.splice(event.target.dataset.index1, 1)
        setUserMessageList(temp_array)
        if (temp_array.length === 0) {
            history.push(`/main/home`)
        }
        else {
            setUserData({
                ...userData,
                id: temp_array[temp_array.length - 1].id,
                uid: temp_array[temp_array.length - 1].uid
            }
            )
            setMode('User')
            history.push(`/main/messaging/User/${temp_array[temp_array.length - 1].id}`)

        }
    }

    useEffect(() => {
        console.log('MessageCard Changed')
    }, [userMessageList])


    return (
        <div ref={refDiv2} className={`messageCardContainer ${focus}`}>
            <div className={`messageCard`} onClick={(e) => retrieveUserData(e)} data-uid={uid} data-id={id}>
                <div className={"messageWrapper"}>
                    <div></div>
                    <p>{name}</p>
                </div>

            </div>
            <div className={"Remove"} data-index1={index} onClick={e => removeUserData(e)}></div>
        </div>
    )
}

export default MessageCard
