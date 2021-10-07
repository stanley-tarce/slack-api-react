import React from 'react'
import './ErrorHandling.css'
function ErrorHandling({ outcome, message }) {
    return (
        <div className={`${outcome}-toast-main`}>
            <div className={`${outcome}-message-container`}>
                <div className={`error-svg-container`}>
                    <div className={`${outcome}-svg`} />
                </div>
                <p className={`${outcome}-msg`}>{message}</p>
            </div>
            <div className="close-message" />
        </div>
    )
}

export default ErrorHandling
