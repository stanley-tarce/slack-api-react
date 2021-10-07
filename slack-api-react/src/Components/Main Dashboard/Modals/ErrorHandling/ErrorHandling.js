import React from 'react'
import './ErrorHandling.css'
function ErrorHandling({ outcome, message, index, feedback, setFeedback }) {
    const removeToast = (event) => {
        console.log(event.target.dataset.index)
        let temp_container = [...feedback]
        temp_container.slice(event.target.dataset.index, 1)
        console.log(temp_container.splice(event.target.dataset.index, 1))
        console.log(temp_container)
        setFeedback(temp_container)
    }
    return (
        <div className={`${outcome}-toast-main`}>
            <div className={`${outcome}-message-container`}>
                <div className={`error-svg-container`}>
                    <div className={`${outcome}-svg`} />
                </div>
                <p className={`${outcome}-msg`}>{message}</p>
            </div>
            <div onClick={(e) => removeToast(e)} className="close-message" data-index={index} />
        </div>
    )
}

export default ErrorHandling
