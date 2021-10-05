import React from 'react'
import './ErrorHandlingContainer.css'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
function ErrorHandlingContainer({
    outcome,
    feedback
}) {
    return (
        <div className={'errorhandlingcontainer'} >
            
            {feedback?.length !== 0 && feedback
            .map((array, index) => <ErrorHandling key={index} outcome={outcome} message={array} />)}
        </div>
    )
}

export default ErrorHandlingContainer
