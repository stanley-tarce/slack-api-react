import React, { useRef, useEffect } from 'react'
import './NewMessageModal.css'
import { useHistory } from 'react-router-dom'
import ResultContainerResult from './ResultContainerResult'
import ResultListOfUser from './ResultListOfUser'
import apiHooks from '../../../API/API'
function NewMessageModal({ userList, setOpenMessageModal, setUserData, setMode, setUserMessageList, userMessageList, userData, setMessageSearchResult, messageSearchResult, userContainer, setUserContainer, header }) {
    const history = useHistory()
    const bodyRef = useRef()
    const { postCreateDirectMessagetoUser } = apiHooks()
    const closeMessageRef = useRef()

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
        let container = [...userMessageList]
        userContainer.forEach((user) => {
            let { id, uid } = user
            let data = {
                receiver_id: user.id,
                receiver_class: 'User',
                body: bodyRef.current.value
            }
            postCreateDirectMessagetoUser(header, data)
            container = [...container, { id: id, uid: uid }]
            console.log(container)
        }

        )
        let final_container_users = [...userMessageList, ...container]
        setUserMessageList(final_container_users)
        setUserData({ ...userData, id: userContainer[0].id, uid: userContainer[0].uid, receiver_class: 'User' })
        setMode('User')
        setOpenMessageModal(false)
        setUserContainer([])
        setMessageSearchResult('')
        return history.push(`/main/messaging/User/${userContainer[0].id}`)
    }
    return (
        <div className="createMessage-container-wrapper">

            <div ref={closeMessageRef} className="createMessage-container">
                <p className="title">Send a Message</p>
                <input value={messageSearchResult} onChange={(e) => setMessageSearchResult(e.target.value)} type="text" className="searchResults" />
                <div className="ResultContainer">
                    {userList.length !== 0 && messageSearchResult.length !== 0 && userList.filter(user => user.uid.toLowerCase().includes(messageSearchResult.toLowerCase())).map((user, index) => {
                        const { id, uid } = user
                        return <ResultContainerResult id={id} uid={uid} key={index} setUserContainer={setUserContainer} setMessageSearchResult={setMessageSearchResult} userContainer={userContainer} />
                    })}

                </div>
                <div className="listOfUsers" >
                    {userContainer.length !== 0 && userContainer.map((user, index) => {
                        const { id, uid } = user
                        return <ResultListOfUser id={id} uid={uid} index={index} key={index} userContainer={userContainer} setUserContainer={setUserContainer} />
                    })}
                </div>
                <input ref={bodyRef} type="text" className="messageBody" />
                <button onClick={(e) => sendMessage(e)}>Send Message</button>
            </div>
        </div>
    )
}

export default NewMessageModal

