import React, { useCallback, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainNavBar from './MainNavBar/MainNavBar'
import MainBody from './MainBody/MainBody'
import './MainDashBoard.css'
import apiHooks from '../API/API'
function MainDashboard({
    userAccessToken,
    userClient,
    userExpiry,
    userUid,
    header,
    setHeader,
    userList,
    setUserList
}) {
    const { getAllUsersMain } = apiHooks()
    const updateGetAllUsers = async (header) => {
        const result = await getAllUsersMain(header)
        let dataContainer = []
        result.data.map(data2 => dataContainer = [...dataContainer, { id: data2.id, uid: data2.uid }])
        dataContainer.sort((a, b) => a.id - b.id || a.uid.localeCompare(b.uid))
        setUserList(dataContainer)
    }
    const updateHeaders = useCallback(() => {
        setHeader({
            expiry: userExpiry,
            uid: userUid,
            accessToken: userAccessToken,
            client: userClient
        })
    }, [setHeader, userUid, userExpiry, userAccessToken, userClient])
    useEffect(() => {
        updateHeaders()
    }, [updateHeaders])

    useEffect(() => {
        if (header && Object.values(header).every(x => x !== '')) {
            console.log(header)
            updateGetAllUsers(header)
            console.log(userList)
        }
        else {
            console.log('Missing Headers, No render')
        }
    }, [header, updateGetAllUsers, userList])
    console.log(header)
    return (
        <div className={"Main-DashBoard"}>
            <div className={"sidebarHolder"}><Sidebar /></div>
            <div className={"headerbarHolder"}><MainNavBar /></div>
            <div className={"MainBodyHolder"}><MainBody /></div>
        </div>
    )
}

export default MainDashboard
