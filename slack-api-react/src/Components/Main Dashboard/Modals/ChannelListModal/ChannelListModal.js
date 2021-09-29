import React from 'react'
import modalLogo from './assets/lock.svg'
import './ChannelListModal.css'
import ChannelListCards from '../ChannelListCards/ChannelListCards'

const ChannelListModal = () => {

    return (
        <div className="modal-bg">
            <div className="modal-main">
                <div className="modal-header">
                    <div className="modal-title">
                        <img src={modalLogo} className="modal-logo" alt={"lock"}></img>
                        <h2 className="modal-channel">batch11</h2>
                    </div>
                    <div onClick={null} className="modal-close"><span>+</span></div>
                </div>
                <div className="modal-body">
                    <div className="search-container">
                        <i className="fa fa-search searchIcon"></i>
                        <input type="search" placeholder="Find members.." className="search" name="search"></input>
                    </div>
                    <div className={"member-list"}>
                        <ChannelListCards />
                        <ChannelListCards />
                        <ChannelListCards />
                        <ChannelListCards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelListModal
