import React from 'react'
import './UserListModal.css'
function UserListModal({ refModalData, userDetails }) {
    const { name, id } = userDetails
    return (
        <div className={"userListModalBackground"} ref={refModalData}>
            <div className={"userListModal"}>
                <div className={"Avatar"} />
                <p className={"id"}><b>ID: </b>{id}</p>
                <p className={"uid"}><b>Name: </b>{name}</p>
                <div className={"buttonContainer"}>
                    <button className={"inviteChannel"}>Invite to Channel</button>
                    <button className={"sendMessage"}>Send Message</button>
                </div>
            </div>

        </div>
    )
}
//Check if we need to use Modal
export default UserListModal
