import React from 'react'
import './UserListModal.css'
function UserListModal({ refModalData, userDetails, setOpenUserDataModal, setOpenChannelListModal, setRedirectToChannel }) {
    const { name, id } = userDetails
    const sendInviteChannel = (e) => {
        setOpenChannelListModal(true)
        setOpenUserDataModal(false)
        setRedirectToChannel(false)
    }
    return (
        <div className={"userListModalBackground"}  >
            <div className={"userListModal"} ref={refModalData} >
                <div className={"Avatar"} />
                <p className={"id"}><b>ID: </b>{id}</p>
                <p className={"uid"}><b>Name: </b>{name}</p>
                <div className={"buttonContainer"}>
                    <button onClick={(e) => sendInviteChannel(e)} className={"inviteChannel"}>Invite to Channel</button>
                    <button className={"sendMessage"}>Send Message</button>
                </div>
            </div>

        </div>
    )
}
//Check if we need to use Modal
export default UserListModal
