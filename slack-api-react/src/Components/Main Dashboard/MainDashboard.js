import React, { useCallback, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainNavBar from './MainNavBar/MainNavBar'
import MainBody from './MainBody/MainBody'
import './MainDashBoard.css'
import apiHooks from '../API/API'
function MainDashboard({
    header,
    userList,
    setUserList,
    channelList,
    setChannelList
}) {
    const { getAllUsersMain, getRetrieveAllChannels } = apiHooks()

    // ! USECALLBACKS!
    const updateGetAllUsers = useCallback(async (header) => {
        const result = await getAllUsersMain(header)
        let dataContainer = []
        if (result) {
            result.data.data.map(data2 => dataContainer = [...dataContainer, { id: data2.id, uid: data2.uid }])
            dataContainer.sort((a, b) => a.id - b.id || a.uid.localeCompare(b.uid))
            setUserList(dataContainer)
        }
        else {
            console.log('array emptyy')
        }

    }, [getAllUsersMain, setUserList])


    const updateGetRetrieveAllChannels = useCallback(async (header) => {
        const result = await getRetrieveAllChannels(header)
        let dataContainer = []
        if (result) {
            result.data.data.map(data2 => dataContainer = [...dataContainer, { channelId: data2.id, owner: data2['owner_id'], name: data2.name }])
            dataContainer.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name))
            setChannelList(dataContainer)
        }
        else {
            console.log('array emptyy')
        }
    }, [getRetrieveAllChannels, setChannelList])
    // ! USECALLBACKS END

    // ? --------------
    // ? USEEFFECTS
    // ? --------------


    // ? 2 
    useEffect(() => {
        if (header && Object.values(header).every(x => x !== '')) {
            updateGetAllUsers(header)
            console.log(userList)
        }
        else {
            console.log('Missing Headers, No render')
        }
    }, [header])
    useEffect(() => {
        if (header && Object.values(header).every(x => x !== '')) {
            updateGetRetrieveAllChannels(header)
            console.log(channelList)
        }
        else {
            console.log('Missing Headers, No render')
        }
    }, [header])


    console.log(header, userList)
    return (
        <div className={"Main-DashBoard"}>
            <div className={"sidebarHolder"}><Sidebar channelList={channelList} /></div>
            <div className={"headerbarHolder"}><MainNavBar /></div>
            <div className={"MainBodyHolder"}><MainBody /></div>
        </div>
    )
}

export default MainDashboard
