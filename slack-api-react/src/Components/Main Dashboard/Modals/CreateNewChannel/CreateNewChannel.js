import React, { useState, useRef } from 'react'
import './CreateNewChannel.css'
import close from './assets/close.png'
import apiHooks from '../../../API/API'
import { useHistory } from 'react-router-dom'
import CreateNewChannelCard from './CreateNewChannelCard'
import ChannelUserContainer from './ChannelUserContainer/ChannelUserContainer'

const CreateNewChannel = (
    { openNewChannelModal,
        setOpenNewChannelModal,
        header,
        openNewChannelLists,
        setOpenNewChannelLists,
        userList,
        newChannelListSearch,
        setNewChannelListSearch,
        setToast,
        setFeedback,
        setOutcome
    }) => {

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
    const onButtonSubmit = async (event) => {
        event.preventDefault()
        let temp_array = [...openNewChannelLists]
        let container = []
        temp_array.forEach((item) => {
            container = [...container, item.id]
        })
        let data = {
            name: channelName.current.value,
            user_ids: container
        }
        console.log(data)
        postCreateChannelWithUsers(header, data).then((response) => {
            if (response.data.hasOwnProperty('errors')) {
                setToast(true)
                setOutcome('error')
                setFeedback(response.data.errors)
                setTimeout(() => setToast(false), 3000)
                setOpenNewChannelModal(false)
            }
            else {
                setToast(true)
                setOutcome('success')
                setFeedback(['Create channel successful!'])
                setTimeout(() => setToast(false), 3000)
                setOpenNewChannelModal(false)
            }

        })




        // postCreateChannelWithUsers(data) ? history.push('/') : alert('error') // ! Edit 
    }

    return (
        <div className="newchannel-bg">
            <div className="newchannel-cont">
                <div className="newchannel-header" >
                    <h2>Create New Channel</h2>
                    <img onClick={(e) => closeModal(e)} src={close}></img>
                </div>
                <input type="text" placeholder="Channel Name" className="channelName" ref={channelName}></input>
                <input type="text" placeholder="Search users..." className="newchannel-user-search" onChange={(e) => setNewChannelListSearch(e.target.value)}></input>
                <div className="user-containers">
                    {userList.length !== 0 && userList
                        .filter(user => user.uid.toLowerCase().includes(newChannelListSearch.toLowerCase()))
                        .map((account, index) =>
                            <ChannelUserContainer key={index} id={account.id} uid={account.uid} openNewChannelLists={openNewChannelLists} setOpenNewChannelLists={setOpenNewChannelLists}
                            />
                        )}
                </div>
                <div className="inv-mems">
                    {openNewChannelLists.length !== 0 && openNewChannelLists.map((user, index) => <CreateNewChannelCard uid={user.uid} key={index} index={index} setOpenNewChannelLists={setOpenNewChannelLists} openNewChannelLists={openNewChannelLists} />)}
                </div>
                <button type="submit" className="newchannel-submit" onClick={onButtonSubmit}>Create Channel</button>
            </div>
        </div>

    )
}

export default CreateNewChannel
