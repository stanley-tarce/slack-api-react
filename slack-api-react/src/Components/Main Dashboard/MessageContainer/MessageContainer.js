import React, { useEffect } from 'react'
import './MessageContainer.css'
import MessageBox from '../Message Box/MessageBox'
import apiHooks from '../../API/API'

function MessageContainer({ mode, createMessageContainer, setMode, setCreateMessageContainer, channelData, header, userData }) {
    const { getRetrieveAllMessagesInsideChannel, getRetrieveAllMessagesFromUser } = apiHooks()
    useEffect(() => {
        if (mode === 'Channel' && (Object.values(userData).every(x => x !== '') || Object.values(channelData).every(x => x !== ''))) {
            const retrieveDataAllMessages = async () => {
                const result = await getRetrieveAllMessagesInsideChannel(header, channelData.channelId)
                setCreateMessageContainer(result.data)
            }
            retrieveDataAllMessages()
        }
        else if (mode === 'User' && (Object.values(userData).every(x => x !== '') || Object.values(channelData).every(x => x !== ''))) {
            const retrieveDataAllMessages = async () => {
                const result = await getRetrieveAllMessagesFromUser(header, userData.id)
                setCreateMessageContainer(result.data)
            }
            retrieveDataAllMessages()
        }
    })
    const { data } = createMessageContainer

    console.log(createMessageContainer)
    return (
        <div className={"Message-Container"}>
            {data && data.length !== 0 && data.map((message, index) => {
                const { body, created_at, sender: { id, uid } } = message
                return (<MessageBox key={index} body={body} uid={uid} id={id} created={created_at} />)
            }
            )
            }

        </div>

    )

}

export default MessageContainer
