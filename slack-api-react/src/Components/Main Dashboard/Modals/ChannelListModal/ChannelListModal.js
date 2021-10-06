import React from 'react'
import modalLogo from './assets/lock.svg'
import './ChannelListModal.css'
import ChannelListCards from '../ChannelListCards/ChannelListCards'

const ChannelListModal = ({
    userList,
    channelData,
    refChannelListModal,
    setOpenChannelListMembers,
    setUserDetails,
    userDetails,
    setHeaderBarSearch,
    setOpenUserDataModal,
    setOpenUserListModal,
    channelListSearch,
    setChannelListSearch }) => {
    const { channel_members } = channelData
    let channelMemberContainer = []
    channel_members.forEach(member => channelMemberContainer = [...channelMemberContainer, member.user_id])
    const filteredList = userList.filter((user) => channelMemberContainer.includes(user.id))


    return (
        <div ref={refChannelListModal} className="modal-bg">
            <div className="modal-main">
                <div className="modal-header">
                    <div className="modal-title">
                        <img src={modalLogo} className="modal-logo" alt={"lock"}></img>
                        <h2 className="modal-channel">{channelData.name}</h2>
                    </div>
                    <div onClick={(e) => setOpenChannelListMembers(false)} className="modal-close"><span>+</span></div>
                </div>
                <div className="modal-body">
                    <div className="search-container">
                        <i className="fa fa-search searchIcon"></i>
                        <input onChange={(e) => setChannelListSearch(e.target.value)} type="search" placeholder="Find members.." className="search" name="search"></input>
                    </div>
                    <div className={"member-list"}>
                        {filteredList.length !== 0 && filteredList.filter(filters => filters.uid.toLowerCase().includes(channelListSearch.toLowerCase())).map(user =>
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
                                setChannelListSearch={setChannelListSearch} />
                        )
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelListModal
