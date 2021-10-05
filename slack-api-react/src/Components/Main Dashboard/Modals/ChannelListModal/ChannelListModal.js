import React from 'react'
import modalLogo from './assets/lock.svg'
import './ChannelListModal.css'
import ChannelListCards from '../ChannelListCards/ChannelListCards'

const ChannelListModal = ({ userList, channelData, refChannelListModal, setOpenChannelListMembers, setUserDetails, userDetails, setHeaderBarSearch, setOpenUserDataModal, setOpenUserListModal }) => {
    const { channel_members } = channelData
    let channelMemberContainer = []
    channel_members.forEach(member => channelMemberContainer = [...channelMemberContainer, member.user_id])
    console.log(channelMemberContainer)

    return (
        <div ref={refChannelListModal} className="modal-bg">
            <div className="modal-main">
                <div className="modal-header">
                    <div className="modal-title">
                        <img src={modalLogo} className="modal-logo" alt={"lock"}></img>
                        <h2 className="modal-channel">batch11</h2>
                    </div>
                    <div onClick={(e) => setOpenChannelListMembers(false)} className="modal-close"><span>+</span></div>
                </div>
                <div className="modal-body">
                    <div className="search-container">
                        <i className="fa fa-search searchIcon"></i>
                        <input type="search" placeholder="Find members.." className="search" name="search"></input>
                    </div>
                    <div className={"member-list"}>\
                        {channelMemberContainer.length !== 0 && channelMemberContainer.forEach(member => {
                            console.log(member)
                            return userList.filter(user => {
                                console.log(user.id)
                                return member.includes("456")


                            })
                        }
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelListModal
