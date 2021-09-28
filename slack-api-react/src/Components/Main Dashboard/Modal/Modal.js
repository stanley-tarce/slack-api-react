import React from 'react'
import modalLogo from './assets/lock.svg'
import './Modal.css'

const Modal = () => {
    
    return (
        <div className="modal-bg">
            <div className="modal-main">
                <div className="modal-header">
                    <div className="modal-title">
                        <img src={modalLogo} className="modal-logo"></img>
                        <h2 className="modal-channel">batch 11</h2>
                    </div>
                    <div className="modal-close"><span>+</span></div>
                </div>
                <div className="modal-body">
                    <div className="search-container">
                        <i className="fa fa-search searchIcon"></i>
                        <input type="search" placeholder="Find members.." className="search" name="search"></input>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Modal
