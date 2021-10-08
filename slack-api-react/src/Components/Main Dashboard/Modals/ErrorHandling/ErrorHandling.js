import React from 'react'
import './ErrorHandling.css'
function ErrorHandling({ outcome, message, index, feedback, setFeedback }) {

    const removeList = (event) => {
        let temp_array = [...feedback]
        temp_array.splice(event.target.dataset.index, 1)
        setFeedback(temp_array)
    }
    return (
        <div className={`${outcome}-toast-main`}>
            <div className={`${outcome}-message-container`}>
                <div className={`${outcome}-svg-container`}>
                    <div className={`${outcome}-svg`} />
                </div>
                <p className={`${outcome}-msg`}>{message}</p>
            </div>
            <div onClick={(event) => removeList(event)} className="close-message" data-index={index} />
        </div>
    )
}

export default ErrorHandling
