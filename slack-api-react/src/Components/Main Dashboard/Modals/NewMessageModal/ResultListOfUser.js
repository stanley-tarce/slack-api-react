import React from 'react'
import './ResultListOfUser.css'

function ResultListOfUser({ id, uid, setUserContainer, index, userContainer }) {
    let name = uid.split('@')[0]
    const removeData = (event) => {
        event.preventDefault()
        var temp_array = [...userContainer]
        console.log(event.target.dataset.index)
        temp_array.splice(event.target.dataset.index, 1)
        setUserContainer(temp_array)
    }
    return (
        <div className="result-container">
            <p>{name}</p>
            <div className="close-button" data-index={index} onClick={(e) => removeData(e)}>X</div>
        </div>
    )
}

export default ResultListOfUser
