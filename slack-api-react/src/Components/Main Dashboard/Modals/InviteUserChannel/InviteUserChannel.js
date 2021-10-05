import React from 'react'
import './InviteUserChannel.css'
import ChannelCard from '../../Sidebar/ChannelCard/ChannelCard'
import apiHooks from '../../../API/API'
import { useHistory } from 'react-router-dom'

function InviteUserChannel({
    channelList,
    setChannelData,
    userDetails,
    channelData,
    header,
    setOpenChannelListModal,
    refChannelModalSelectionData,
    setRedirectToChannel,
    setToast,
    setOutcome,
    setFeedback }) {
    const history = useHistory()
    const { channelId } = channelData
    const { id } = userDetails
    const { postInviteUserToChannel } = apiHooks()
    const sendInviteChannel = (event) => {
        event.preventDefault()
        let data = {
            id: channelId,
            member_id: id
        }
        console.log(data)
        postInviteUserToChannel(header, data).then(() => {
            setToast(true)
            setOutcome('success')
            setFeedback(['Invite user to a channel is successful'])
            setTimeout(() => setToast(false), 3000)
            setOpenChannelListModal(false)
            setRedirectToChannel(true)
            return history.push('/main/home')
        })
        setOpenChannelListModal(false)
        setRedirectToChannel(true)

    }
    return (
        <div className={"inviteChannelModalBackground"}>
            <div className={"inviteChannelContainer"} ref={refChannelModalSelectionData}>
                <p>Select a Channel</p>
                <div className={"channelContainer"}>

                    {channelList.length !== 0 && channelList.map((channel, index) => <ChannelCard channelData={channelData} setChannelData={setChannelData} key={index} name={channel.name} channelId={channel.channelId} owner={channel.owner} header={header} />)}
                </div>

                <button onClick={(e) => sendInviteChannel(e)}>Send Invite</button>
            </div>
        </div>
    )
}

export default InviteUserChannel
