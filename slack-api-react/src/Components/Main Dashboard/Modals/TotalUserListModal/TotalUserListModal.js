import React from 'react'
import ChannelListCards from '../ChannelListCards/ChannelListCards'
import './TotalUserListModal.css'
function TotalUserListModal({
    userList,
    headerBarSearch,
    setOpenUserListModal,
    setHeaderBarSearch,
    setOpenUserDataModal,
    setUserDetails,
    userDetails,
    setOpenChannelListMembers,
    setChannelListSearch }) {
    return (
        <div className="boxers">
            {userList.length !== 0 && userList
                .filter(user => user.uid.toLowerCase().includes(headerBarSearch.toLowerCase()))
                .map(user =>
                    <ChannelListCards
                        key={user.id}
                        id={user.id}
                        uid={user.uid}
                        setOpenUserDataModal={setOpenUserDataModal}
                        setHeaderBarSearch={setHeaderBarSearch}
                        setOpenUserListModal={setOpenUserListModal}
                        userDetails={userDetails}
                        setUserDetails={setUserDetails}
                        setOpenChannelListMembers={setOpenChannelListMembers}
                        setChannelListSearch={setChannelListSearch}
                    />)}
        </div>
    )
}

export default TotalUserListModal
