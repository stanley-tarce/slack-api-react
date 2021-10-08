import React, { useRef, useEffect } from 'react'
import './CreateNewChannel.css'
import close from './assets/close.png'
import apiHooks from '../../../API/API'

import CreateNewChannelCard from './CreateNewChannelCard'
import ChannelUserContainer from './ChannelUserContainer/channelContainer'

const CreateNewChannel = (
    {
        setOpenNewChannelModal,
        header,
        openNewChannelLists,
        setOpenNewChannelLists,
        userList,
        newChannelListSearch,
        setNewChannelListSearch,
        setToast,
        setFeedback,
        setOutcome,
        setChannelList
    }) => {

    const { postCreateChannelWithUsers, getRetrieveAllChannels } = apiHooks()
    const channelName = useRef();
    const handleCLoseRef = useRef(null)

    const closeModal = (event) => {
        event.preventDefault()
        setOpenNewChannelModal(false)
    }

    const CloseRefChannelModal = (ref) => {
        useEffect(() => {
            const handleCloseRefChannelModal = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenNewChannelModal(false)
                }


            }
            document.addEventListener("mousedown", handleCloseRefChannelModal)
            return () => document.removeEventListener("mousedown", handleCloseRefChannelModal)
        }
            , [ref])
    }
    CloseRefChannelModal(handleCLoseRef)


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
                channelName.current.value = ''
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
                getRetrieveAllChannels(header).then(response => {
                    console.log(response)
                    let dataContainer = []
                    if (response && response?.data.data.length !== 0) {
                        response.data.data.map(data2 => dataContainer = [...dataContainer, { channelId: data2.id, owner: data2['owner_id'], name: data2.name, receiver_class: 'Class' }])
                        dataContainer.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name))
                        setChannelList(dataContainer)
                    }
                })
            }

        })




        // postCreateChannelWithUsers(data) ? history.push('/') : alert('error') // ! Edit 
    }

    return (
        <div className="newchannel-bg">
            <div ref={handleCLoseRef} className="newchannel-cont">
                <div className="newchannel-header" >
                    <h2>Create New Channel</h2>
                    <img onClick={(e) => closeModal(e)} src={close}></img>
                </div>
                <input type="text" placeholder="Channel Name" className="channelName" ref={channelName}></input>
                <input type="text" placeholder="Search users..." className="newchannel-user-search" value={newChannelListSearch} onChange={(e) => setNewChannelListSearch(e.target.value)}></input>
                <div className="user-containers" style={{ display: newChannelListSearch.length !== 0 ? "block" : "none" }}>
                    {newChannelListSearch.length !== 0 && userList
                        .filter(user => user.uid.toLowerCase().includes(newChannelListSearch.toLowerCase()))
                        .map((account, index) =>
                            <ChannelUserContainer key={index} id={account.id} uid={account.uid} openNewChannelLists={openNewChannelLists} setOpenNewChannelLists={setOpenNewChannelLists}
                                setNewChannelListSearch={setNewChannelListSearch} setFeedback={setFeedback} setOutcome={setOutcome} setToast={setToast} />
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
