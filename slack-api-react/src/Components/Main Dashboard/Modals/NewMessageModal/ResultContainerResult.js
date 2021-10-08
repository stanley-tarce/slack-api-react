import React from 'react'
import './ResultContainerResult.css'
function ResultContainerResult({ id, uid, setUserContainer, userContainer, setMessageSearchResult }) {
    let name = uid.split('@')[0]
    const updateContainer = (event) => {
        event.preventDefault()
        setUserContainer([...userContainer, { id: event.target.dataset.id, uid: event.target.dataset.uid }])
        setMessageSearchResult('')
    }

    return (
        <div className="result-container-wrapper" onClick={(e) => updateContainer(e)} data-id={id} data-uid={uid}>
            <p>{name}</p>
        </div>
    )
}

export default ResultContainerResult
