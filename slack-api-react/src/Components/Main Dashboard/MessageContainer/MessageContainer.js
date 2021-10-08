import React, { useEffect } from 'react'
import './MessageContainer.css'
import apiHooks from '../../API/API'
import MessagesHolder from '../MessagesHolder/MessagesHolder'

function MessageContainer({
    mode,
    createMessageContainer,
    setCreateMessageContainer,
    channelData,
    header,
    userData }) {
    const {
        getRetrieveAllMessagesInsideChannel,
        getRetrieveAllMessagesFromUser } = apiHooks()
    useEffect(() => {
        if (mode === 'Channel' && (Object.values(userData).every(x => x !== '') || Object.values(channelData).every(x => x !== ''))) {
            const retrieveDataAllMessages = async () => {
                const result = await getRetrieveAllMessagesInsideChannel(header, channelData.channelId)
                let temp = { ...result }
                console.log(data)
                setTimeout(() => setCreateMessageContainer(temp.data), 7000)
                return () => clearTimeout(setTimeout(() => setCreateMessageContainer(result.data), 7000))
            }
            retrieveDataAllMessages()
        }
        else if (mode === 'User' && (Object.values(userData).every(x => x !== '') || Object.values(channelData).every(x => x !== ''))) {
            const retrieveDataAllMessages = async () => {
                const result = await getRetrieveAllMessagesFromUser(header, userData.id)
                setTimeout(() => setCreateMessageContainer(result.data), 7000)
                return () => clearTimeout(setTimeout(() => setCreateMessageContainer(result.data), 7000))
            }
            retrieveDataAllMessages()
        }
    })
    const { data } = createMessageContainer

    const sortDataByDate = (data) => {
        let dateContainer = []
        let sortedDataByDate = []
        let container = []
        console.log(data)
        if (data) {
            data.forEach((message) => {
                const { created_at } = message
                let date = created_at.split('T')[0]
                dateContainer = [...dateContainer, date]
            })
            let dateContainerUnique = [...new Set(dateContainer)] //3 items
            dateContainerUnique.forEach((uniqueD) => {
                container = []
                data.forEach(dates => {
                    const { created_at } = dates
                    let date = created_at.split('T')[0]
                    date === uniqueD ? container = [...container, dates] : console.log('No Match')
                })
                let object = {
                    date: uniqueD,
                    data: container
                }
                sortedDataByDate = [...sortedDataByDate, object]
            })
            return sortedDataByDate
        }
    }

    let finalSortDate = sortDataByDate(data)
    return (

        <div className={"Message-Container"}>
            {finalSortDate && finalSortDate.length !== 0 && finalSortDate.map((message, index) => {
                const { date, data } = message
                return (<MessagesHolder key={index} date={date} data={data} index={index} />)
            })}
        </div>



    )

}

export default MessageContainer
