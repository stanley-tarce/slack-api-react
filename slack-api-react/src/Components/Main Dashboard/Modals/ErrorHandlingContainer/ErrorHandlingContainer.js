import React from 'react'
import './ErrorHandlingContainer.css'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
function ErrorHandlingContainer({
    outcome,
    feedback,
    setFeedback
}) {
    return (
        <div className={'errorhandlingcontainer'} >

            {feedback?.length !== 0 && feedback
                .map((array, index) => <ErrorHandling index={index} key={index} outcome={outcome} message={array} feedback={feedback} setFeedback={setFeedback} />)}
        </div>
    )
}

export default ErrorHandlingContainer
