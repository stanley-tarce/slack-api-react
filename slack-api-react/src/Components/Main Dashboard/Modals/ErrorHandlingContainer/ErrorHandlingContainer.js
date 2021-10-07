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
                .map((array, index) => <ErrorHandling key={index} index={index} outcome={outcome} message={array} setFeedback={setFeedback} feedback={feedback} />)}
        </div>
    )
}

export default ErrorHandlingContainer
