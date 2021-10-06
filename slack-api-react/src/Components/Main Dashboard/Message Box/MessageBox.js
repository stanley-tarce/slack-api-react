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
                <p className={"Time-Stamp"}>{`${changeDateToToday(date, stringRealDate(realDay, realMonth, realYear))} ${time}`}</p>
                <p className={"User-Name"}>{name}</p>
                <div className={"Image-Avatar"} />

            </div>
            <p className={"Message-Body"}>{body}</p>

        </div>

    )
}
export default MessageBox
