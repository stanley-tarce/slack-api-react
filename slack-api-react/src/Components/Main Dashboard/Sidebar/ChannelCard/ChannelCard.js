import React, { useState, useRef, useEffect } from 'react'
import './ChannelCard.css'
import { useHistory } from 'react-router'
import apiHooks from '../../../API/API'

function ChannelCard({
    channelId,
    setCreateMessageContainer,
    owner,
    name,
    setChannelData,
    channelData,
    header,
    setMode,
    redirectToChannel }) {
    const { getRetrieveChannel } = apiHooks()
    const refDiv = useRef(null)
    const history = useHistory()
    const [focus, setFocus] = useState('null')
    const CloseRefDiv = (ref) => {
        useEffect(() => {
            const handleCloseRefDiv = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setFocus('null')

                }


            }
            document.addEventListener("mousedown", handleCloseRefDiv)
            return () => document.removeEventListener("mousedown", handleCloseRefDiv)
        }
            , [ref])
    }
    CloseRefDiv(refDiv)
    const retrieveData = async (event) => {
        const result = await getRetrieveChannel(header, event.target.dataset.channelid)
        const { id, name, owner_id, channel_members } = result.data.data
        var channelDataMembers = []
        channel_members.map(member => channelDataMembers = [...channelDataMembers, { user_id: member.user_id }])
        console.log(result)
        setFocus('focus')
        setChannelData({
            ...channelData,
            channelId: id,
            name: name,
            owner: owner_id,
            channel_members: channelDataMembers
        })
        // console.log(event.target.dataset.names)
        if (redirectToChannel === true) {
            setCreateMessageContainer([])
            setMode('Channel')
            history.push(`/main/messaging/channel/${event.target.dataset.channelid}`)
        }
    }
    return (
        <div ref={refDiv} onClick={(e) => retrieveData(e)}
            data-owner={owner}
            data-channelid={channelId}
            data-name={name}
            data-names={'hello'}
            className={`channelCard ${focus}`}>
            <div className={"picture"}></div>
            <p className={"name"}>{name}</p>
        </div>
    )
}

export default ChannelCard
