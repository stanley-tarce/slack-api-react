import React from 'react'
import './UserListModal.css'
function UserListModal() {
    return (
        <div className={"userListModalBackground"}>
            <div className={"userListModal"}>
                <div className={"Avatar"} />
                <p className={"id"}><b>ID:</b>{`456`}</p>
                <p className={"uid"}><b>Name:</b>{` Park Bong Go`}</p>
                <div className={"buttonContainer"}>
                    <button className={"inviteChannel"}>Invite to Channel</button>
                    <button className={"sendMessage"}>Send Message</button>
                </div>
            </div>

        </div>
    )
}

export default UserListModal
