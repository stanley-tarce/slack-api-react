import React from 'react'
import './MessagesHolder.css'
import MessageBox from '../Message Box/MessageBox'
import dateConverter from './DateConverter'
function MessagesHolder({ date, data }) {
    // let finalDate = dateConverter(date)
    let realDay = new Date().getDate()
    let realMonth = new Date().getMonth() + 1
    let realYear = new Date().getFullYear()

    const stringRealDate = (day, month, year) => {
        const finalDay = day <= 9 ? `0${day}` : day
        const finalMonth = month <= 9 ? `0${month}` : month
        const finalDate = `${year}-${finalMonth}-${finalDay}`
        return finalDate
    }
    const changeDateToToday = (date, realDate) => {
        if (date === realDate) {
            console.log('Same Date!')
            return 'Today'
        }
        else {
            return date
        }
    }
    return (
        <div className="message-holder-container">
            <div className="date-holder-container">
                <div className="line"></div>
                <div className="date-holder">{changeDateToToday(date, stringRealDate(realDay, realMonth, realYear))}</div>
                <div className="line"></div>
            </div>
            <div className="messages-holder-container">

                {data && data.length !== 0 && data.map((message, index) => {
                    const { body, created_at, sender: { id, uid } } = message
                    return (<MessageBox key={index} body={body} uid={uid} id={id} created={created_at} />)
                }
                )
                }

            </div>

        </div>
    )
}

export default MessagesHolder
