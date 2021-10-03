import React from 'react'
import { useHistory } from 'react-router'
import './UserListModal.css'
function UserListModal({
    refModalData,
    userDetails,
    setOpenUserDataModal,
    setOpenChannelListModal,
    setRedirectToChannel,
    setUserData,
    setMode,
    userData,
    userMessageList,
    setUserMessageList

}
) {
    const history = useHistory()
    const { name, id, uid } = userDetails
    const sendInviteChannel = (e) => {
        setOpenChannelListModal(true)
        setOpenUserDataModal(false)
        setRedirectToChannel(false)
    }

    const createMessage = (e) => {
        e.preventDefault()
        setUserData({ ...userData, id: id, uid: uid, receiver_class: 'User' })
        setMode('User')
        setOpenUserDataModal(false)
        setUserMessageList([...userMessageList, { id: id, uid: uid }])
        return history.push(`/main/messaging/User/${id}`)
    }
    return (
        <div className={"userListModalBackground"}  >
            <div
                className={"userListModal"}
                ref={refModalData} >
                <div className={"Avatar"} />
                <p className={"id"}><b>ID: </b>{id}</p>
                <p className={"uid"}><b>Name: </b>{name}</p>
                <div className={"buttonContainer"}>
                    <button onClick={(e) => sendInviteChannel(e)} className={"inviteChannel"}>Invite to Channel</button>
                    <button onClick={(e) => createMessage(e)} className={"sendMessage"}>Send Message</button>
                </div>
            </div>

        </div>
    )
}
//Check if we need to use Modal
export default UserListModal
