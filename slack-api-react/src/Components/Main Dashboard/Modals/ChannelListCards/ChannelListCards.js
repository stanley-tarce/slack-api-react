import React from 'react'
import './ChannelListsCards.css'
function ChannelListCards({
    id,
    uid,
    setOpenUserListModal,
    setHeaderBarSearch,
    setOpenUserDataModal,
    setUserDetails,
    userDetails,
    setOpenChannelListMembers,
    setChannelListSearch }) {
    let name = uid.split('@')[0]
    const openUserData = (e) => {
        e.preventDefault()
        setUserDetails({
            ...userDetails,
            name: name,
            uid: e.target.dataset.uid,
            id: e.target.dataset.id
        })
        setOpenUserDataModal(true)
        setOpenUserListModal(false)
        setHeaderBarSearch('')
        setOpenChannelListMembers(false)
        setChannelListSearch('')
    }
    return (
        <div
            data-uid={uid}
            data-id={id}
            className={'channel-list-card'}
            onClick={(e) => openUserData(e)}>
            <div className={"avatar"} />
            <p className={"user"}>{name}</p>
        </div>
    )
}

export default ChannelListCards
