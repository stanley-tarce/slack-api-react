import React, { useRef, useEffect, useState } from 'react'
import './NewMessageModal.css'
import { useHistory } from 'react-router-dom'
import ResultContainerResult from './ResultContainerResult'
import ResultListOfUser from './ResultListOfUser'
import apiHooks from '../../../API/API'
function NewMessageModal({ userList, setOpenMessageModal, setUserData, setMode, setUserMessageList, userMessageList, userData, setMessageSearchResult, messageSearchResult, userContainer, setUserContainer, header, setToast, setFeedback, setOutcome }) {
    const history = useHistory()
    const bodyRef = useRef()
    const { postCreateDirectMessagetoUser } = apiHooks()
    const closeMessageRef = useRef()
    const [showUserContainer, setShowUserContainer] = useState(false)
    const CloseMessageRef = (ref) => {
        useEffect(() => {
            const handleCloseMessageRef = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenMessageModal(false)
                    setUserContainer([])
                    setMessageSearchResult('')
                }


            }
            document.addEventListener("mousedown", handleCloseMessageRef)
            return () => document.removeEventListener("mousedown", handleCloseMessageRef)
        }
            , [ref])
    }
    CloseMessageRef(closeMessageRef)
    const sendMessage = (e) => {
        e.preventDefault()
        let container = []
        let checkDuplicateContainer = [...userMessageList]
        console.log(checkDuplicateContainer)
        if (bodyRef.current.value.length === 0 || !bodyRef.current.value) {
            console.log('Error!!!!!!!!!!!!!!!!!!!!!!!!!!')
            setToast(true)
            setFeedback(['Message Body is empty'])
            setOutcome('error')
            setTimeout(() => setToast(false), 3000)
        }
        else if (userContainer.length === 0) {
            setToast(true)
            setFeedback(['No User/s selected'])
            setOutcome('error')
            setTimeout(() => setToast(false), 3000)
        }
        else {
            userContainer.forEach((user) => {
                let { id, uid } = user
                let data = {
                    receiver_id: user.id,
                    receiver_class: 'User',
                    body: bodyRef.current.value
                }
                let counts = 0
                checkDuplicateContainer.forEach(duplicate => {
                    console.log(duplicate.id)
                    console.log(user.id)
                    if ((duplicate.id.toString() === user.id) || (duplicate.uid.toString() === user.uid)) {
                        console.log('Found one match')
                        counts = counts + 1
                        console.log(counts)

                    }
                })
                if (counts !== 0) {
                    console.log('Matchss!!')
                    postCreateDirectMessagetoUser(header, data)
                }
                else {
                    console.log('No match')
                    container = [...container, { id: id, uid: uid }]
                    postCreateDirectMessagetoUser(header, data)
                }
            }

            )
            let final_container_users = [...userMessageList, ...container]
            setUserMessageList(final_container_users)
            setUserData({ ...userData, id: userContainer[0].id, uid: userContainer[0].uid, receiver_class: 'User' })
            setMode('User')
            setOpenMessageModal(false)
            setUserContainer([])
            setMessageSearchResult('')
            setToast(true)
            setFeedback(['Message Sent'])
            setOutcome('success')
            setTimeout(() => setToast(false), 3000)
            return history.push(`/main/messaging/User/${userContainer[0].id}`)
        }

    }
    useEffect(() => {
        messageSearchResult.length !== 0 ? setShowUserContainer(true) : setShowUserContainer(false)
    }, [messageSearchResult])
    return (
        <div className="createMessage-container-wrapper">

            <div ref={closeMessageRef} className="createMessage-container">
                <div className="createMessage-Header">
                    <p className="title">Send a Message</p>
                    <div className="close-container" onClick={() => setOpenMessageModal(false)} />
                </div>
                <input value={messageSearchResult} placeholder="Search User" onChange={(e) => setMessageSearchResult(e.target.value)} type="text" className="searchResults" />
                {showUserContainer && <div className="ResultContainer">
                    {userList.length !== 0 && messageSearchResult.length !== 0 && userList.filter(user => user.uid.toLowerCase().includes(messageSearchResult.toLowerCase())).map((user, index) => {
                        const { id, uid } = user
                        return <ResultContainerResult id={id} uid={uid} key={index} setUserContainer={setUserContainer} setMessageSearchResult={setMessageSearchResult} userContainer={userContainer} setToast={setToast} setFeedback={setFeedback} setOutcome={setOutcome} />
                    })}
                </div>}
                <div className="listOfUsers" >
                    {userContainer.length !== 0 && userContainer.map((user, index) => {
                        const { id, uid } = user
                        return <ResultListOfUser id={id} uid={uid} index={index} key={index} userContainer={userContainer} setUserContainer={setUserContainer} />
                    })}
                </div>
                <input ref={bodyRef} type="text" className="messageBody" placeholder="Say Something Stupid" />
                <button className="buttonSubmit" onClick={(e) => sendMessage(e)}>Send Message</button>
            </div>
        </div>
    )
}

export default NewMessageModal

