import React from 'react'
import SendLogo from '../../../assets/svg icons/send_icon.svg'
import BoldFormat from '../../../assets/svg icons/boldformat_icon.svg'
import Italicize from '../../../assets/svg icons/italic_icon.svg'
import Strikethrough from '../../../assets/svg icons/strikethrough_icon.svg'
import FontSize from '../../../assets/svg icons/fontsize_icon.svg'
import AttachFile from '../../../assets/svg icons/attachfile_icon.svg'
import Alternate from '../../../assets/svg icons/alternate_icon.svg'
import EmojiIcon from '../../../assets/svg icons/emoji_icon.svg'


import './MessageInput.css'

function MessageInput() {
    return (
        <div className={"Message-Input"}>
            <form className={"Message-Input-Form"}>
                <input className={"Type-Message"} type={"text"} placeholder={"Write a Message"} />
                <div className={"Command-Icons"}>
                    <span className={"Font-Format"}>
                        <img src={BoldFormat} alt="BoldFormat" />
                        <img src={Italicize} alt="Italicize" />
                        <img src={Strikethrough} alt="Strikethrough" />
                    </span>

                    <span className={"Other-Commands"} type>
                        <img src={FontSize} alt="FontSize" />
                        <img src={Alternate} alt="Alternate" />
                        <img src={EmojiIcon} alt="EmojiIcon" />
                        <img src={AttachFile} alt="AttachFile" />
                        <button className={"Send-Button"} type="submit">
                            <img src={SendLogo} alt="send logo" />
                        </button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default MessageInput