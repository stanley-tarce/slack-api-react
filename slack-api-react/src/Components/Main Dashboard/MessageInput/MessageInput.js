import React, { useRef } from 'react'
import SendLogo from '../../../assets/svg icons/send_icon.svg'
import BoldFormat from '../../../assets/svg icons/boldformat_icon.svg'
import Italicize from '../../../assets/svg icons/italic_icon.svg'
import Strikethrough from '../../../assets/svg icons/strikethrough_icon.svg'
import FontSize from '../../../assets/svg icons/fontsize_icon.svg'
import AttachFile from '../../../assets/svg icons/attachfile_icon.svg'
import Alternate from '../../../assets/svg icons/alternate_icon.svg'
import EmojiIcon from '../../../assets/svg icons/emoji_icon.svg'
import apiHooks from '../../API/API'


import './MessageInput.css'

function MessageInput({ setMessage, message, header, channelData, mode, userData }) {
    const {
        postCreateMessageInAChannel,
        postCreateDirectMessagetoUser } = apiHooks()
    const sendMessage = (event) => {
        event.preventDefault()
        if (mode === 'Channel') {
            let data = {
                receiver_id: channelData.channelId,
                receiver_class: channelData.receiver_class,
                body: body.current.value
            }
            postCreateMessageInAChannel(header, data)

        }
        else if (mode === 'User') {
            let data = {
                receiver_id: userData.id,
                receiver_class: userData.receiver_class,
                body: body.current.value
            }
            postCreateDirectMessagetoUser(header, data)
        }
    }

    const body = useRef()
    return (
        <div className={"Message-Input"}>
            <form onSubmit={(e) => sendMessage(e)} className={"Message-Input-Form"}>
                <input ref={body} className={"Type-Message"} type="text" placeholder={"Write a Message"} />
                <button onClick={(e) => sendMessage(e)} className={"Send-Button"} type="submit">
                    <img src={SendLogo} alt="send logo" />
                </button>
            </form>
        </div>
    )
}

export default MessageInput