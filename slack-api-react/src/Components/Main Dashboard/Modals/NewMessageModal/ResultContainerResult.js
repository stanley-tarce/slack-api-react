import React from 'react'
import './ResultContainerResult.css'
function ResultContainerResult({ id, uid, setUserContainer, userContainer, setMessageSearchResult, setOutcome, setFeedback, setToast }) {
    let name = uid.split('@')[0]
    const updateContainer = (event) => {
        let checkDuplicate = [...userContainer]
        event.preventDefault()
        let counts = 0

        if (checkDuplicate.length !== 0) {
            checkDuplicate.forEach(duplicate => {
                console.log('match!')
                if ((duplicate.id === event.target.dataset.id) && (duplicate.uid === event.target.dataset.uid)) {
                    console.log('Match')
                    counts = counts + 1
                }
            })
        }
        if (counts === 0) {
            setUserContainer([...checkDuplicate, { id: event.target.dataset.id, uid: event.target.dataset.uid }])
            setMessageSearchResult('')
        }
        else {
            setMessageSearchResult('')
            //Insert error handling here
            setToast(true)
            setFeedback(['Duplicate entry found'])
            setTimeout(() => setToast(false), 3000)
            setOutcome('error')

        }
    }

    return (
        <div className="result-container-wrapper" onClick={(e) => updateContainer(e)} data-id={id} data-uid={uid}>
            <p>{name}</p>
        </div>
    )
}

export default ResultContainerResult
