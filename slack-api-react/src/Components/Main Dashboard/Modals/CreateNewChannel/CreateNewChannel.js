import React, { useState, useRef } from 'react'
import './CreateNewChannel.css'
import close from './assets/close.png'
import apiHooks from '../../../API/API'
import { useHistory } from 'react-router-dom'

const CreateNewChannel = ({ openNewChannelModal, setOpenNewChannelModal, header }) => {

    const { postCreateChannelWithUsers } = apiHooks()
    const channelName = useRef();
    const history = useHistory()
    const closeModal = (event) => {
        event.preventDefault()
        setOpenNewChannelModal(false)
    }


    // const handleNameChange = (e) => {
    //     setChannelName(e.target.value);
    // }
    const onButtonSubmit = (event) => {
        event.preventDefault()
        let data = {
            channelName: channelName.current.value,
            user_ids: []
        }
        postCreateChannelWithUsers(header, data)
        console.log(header)
        // postCreateChannelWithUsers(data) ? history.push('/') : alert('error') // ! Edit 
    }

    return (
        <div className="newchannel-bg">
            <div className="newchannel-cont">
                <div className="newchannel-header">
                    <h2>Create New Channel</h2>
                    <img onClick={(e) => closeModal(e)} src={close}></img>
                </div>
                <input type="text" placeholder="Channel Name" className="channelName" ref={channelName}></input>
                <input type="text" placeholder="Search users..." className="newchannel-user-search"></input>
                <div className="inv-mems">


                </div>
                <button type="submit" className="newchannel-submit" onClick={onButtonSubmit}>Create Channel</button>
            </div>
        </div>

    )
}

export default CreateNewChannel
