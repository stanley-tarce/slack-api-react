import React from 'react'
import './design.css'
function MessageBox({ body, uid, id, created }) {
    let name = uid.split('@')[0]
    let date = created.split('T')[0]
    let time = created.split('T')[1].split('.')[0].slice(0, 5)
    let realDay = new Date().getDate()
    let realMonth = new Date().getMonth() + 1
    let realYear = new Date().getFullYear()

    const stringRealDate = (day, month, year) => {
        const finalDay = day <= 9 ? `0${day}` : day
        const finalMonth = month <= 9 ? `0${month}` : month
        const finalDate = `${year}-${finalMonth}-${finalDay}`
        return finalDate
    }

    const createTime = (time) => {
        let timeInt = Number(time.slice(0, 2)) + 8
        let minuteInt = Number(time.slice(3))
        let finalMinute = minuteInt < 10 ? `0${minuteInt}` : `${minuteInt}`
        let finalHour = timeInt <= 12 ? timeInt < 10 ? `0${timeInt}` : `${timeInt}` : `${timeInt - 12}`
        let finalTime = timeInt < 12 ? `${finalHour}:${finalMinute} AM` : `${finalHour}:${finalMinute} PM`
        return finalTime
    }

    const changeDateToToday = (date, realDate) => {
        if (date === realDate) {
            return 'Today'
        }
        else {
            return date
        }
    }
    return (
        <div className={"Message-Box"}>
            <div className={"Avatar-and-Image"}>
                <p className={"Time-Stamp"}>{`${changeDateToToday(date, stringRealDate(realDay, realMonth, realYear))} ${createTime(time)}`}</p>
                <p className={"User-Name"}>{name}</p>
                <div className={"Image-Avatar"} />

            </div>
            <p className={"Message-Body"}>{body}</p>

        </div>

    )
}
export default MessageBox
