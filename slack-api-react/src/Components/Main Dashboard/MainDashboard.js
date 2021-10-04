import React, { useCallback, useEffect, useRef } from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainNavBar from './MainNavBar/MainNavBar'
import MainBody from './MainBody/MainBody'
import './MainDashBoard.css'
import { Switch, Route } from 'react-router-dom'
import apiHooks from '../API/API'
import TotalUserListModal from './Modals/TotalUserListModal/TotalUserListModal'
import UserListModal from './Modals/UserListModal/UserListModal'
import InviteUserChannel from './Modals/InviteUserChannel/InviteUserChannel'
import MainDisplay from '../Main Display/MainDisplay'
import CreateNewChannel from './Modals/CreateNewChannel/CreateNewChannel'
function MainDashboard({
    header,
    userList,
    setUserList,
    channelList,
    setChannelList,
    openUserListModal,
    setOpenUserListModal,
    headerBarSearch,
    setHeaderBarSearch,
    openUserDataModal,
    setOpenUserDataModal,
    userDetails,
    setUserDetails,
    openChannelListModal,
    setOpenChannelListModal,
    channelData,
    setChannelData,
    mode,
    createMessageContainer,
    setMode,
    setCreateMessageContainer,
    message,
    setMessage,
    redirectToChannel,
    setRedirectToChannel,
    userMessageList,
    setUserMessageList,
    userData,
    setUserData,
    openNewChannelModal,
    setOpenNewChannelModal
}) {
    // ! START OF FUNCTIONS    
    const { getAllUsersMain, getRetrieveAllChannels, getRetrieveAllMessagesFromUser } = apiHooks()
    const refModalData = useRef(null)
    const refChannelModalSelectionData = useRef(null)


    // ! USECALLBACKS!
    const updateGetAllUsers = useCallback(async (header) => {
        const result = await getAllUsersMain(header)
        let dataContainer = []
        if (result) {
            result.data.data.map(data2 => dataContainer = [...dataContainer, { id: data2.id, uid: data2.uid, receiver_class: 'User' }])
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
            result.data.data.map(data2 => dataContainer = [...dataContainer, { channelId: data2.id, owner: data2['owner_id'], name: data2.name, receiver_class: 'C' }])
            dataContainer.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name))
            setChannelList(dataContainer)
        }
        else {
            console.log('Array Empty')
        }
    }, [getRetrieveAllChannels, setChannelList])

    const getListsofUsers = useCallback(async (headers, userContainer) => {
        let container = []
        if (userContainer) {
            for (let i = userContainer.length - 1; i > 600; i--) {
                const result = await getRetrieveAllMessagesFromUser(headers, userContainer[i].id)
                const { data: { data } } = result
                if (data.length !== 0) {
                    let object = {

                        uid: userContainer[i].uid,
                        id: userContainer[i].id
                    }
                    container = [...container, object]
                }
            }
            setUserMessageList(container)
        }
    }, [getRetrieveAllMessagesFromUser, setUserMessageList])

    const CloseUserDataMOdal = (ref) => {
        useEffect(() => {
            const handleCloseUserDataModal = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenUserDataModal(false)
                    setUserDetails({
                        ...userDetails,
                        name: '',
                        id: '',
                        uid: ''
                    })
                }


            }
            document.addEventListener("mousedown", handleCloseUserDataModal)
            return () => document.removeEventListener("mousedown", handleCloseUserDataModal)
        }
            , [ref])
    }
    const CloseRefChannelSelectionData = (ref) => {
        useEffect(() => {
            const handleCLoseCHannelSelectionData = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenUserDataModal(false)
                    setUserDetails({
                        ...userDetails,
                        name: '',
                        id: '',
                        uid: ''
                    })
                    setOpenChannelListModal(false)
                    setRedirectToChannel(true)
                }


            }
            document.addEventListener("mousedown", handleCLoseCHannelSelectionData)
            return () => document.removeEventListener("mousedown", handleCLoseCHannelSelectionData)
        }
            , [ref])
    }
    CloseRefChannelSelectionData(refChannelModalSelectionData)
    CloseUserDataMOdal(refModalData)
    // ! USECALLBACKS END

    // ? --------------
    // ? USEEFFECTS 
    //
    useEffect(() => {
        if (Object.values(header).every(x => x !== '')) {
            updateGetAllUsers(header)
        }
    }, [header])
    useEffect(() => {
        if (Object.values(header).every(x => x !== '')) {
            getListsofUsers(header, userList)
        }
    }, [userList])
    useEffect(() => {
        if (Object.values(header).every(x => x !== '')) {
            updateGetRetrieveAllChannels(header)
        }

    }, [header])

    useEffect(() => {
        headerBarSearch.length !== 0 ? setOpenUserListModal(true) : setOpenUserListModal(false)
    }, [headerBarSearch])

    return (
        <>
            <div className={"Main-DashBoard"}>
                <div
                    className={"sidebarHolder"}><Sidebar setCreateMessageContainer={setCreateMessageContainer} redirectToChannel={redirectToChannel} channelList={channelList} channelData={channelData} setChannelData={setChannelData} setMode={setMode} header={header} userMessageList={userMessageList} setUserData={setUserData} userData={userData} setUserMessageList={setUserMessageList} openNewChannelModal={openNewChannelModal} setOpenNewChannelModal={setOpenNewChannelModal} /></div>
                <div className={"headerbarHolder"}><MainNavBar headerBarSearch={headerBarSearch} setOpenUserListModal={setOpenUserListModal} setHeaderBarSearch={setHeaderBarSearch} /></div>
                <div className={"MainBodyHolder"}>
                    <Switch>
                        <Route path={'/main/home'}>
                            <MainDisplay />
                        </Route>
                        <Route path={'/main/messaging'}>
                            <MainBody mode={mode} createMessageContainer={createMessageContainer} setMode={setMode} setCreateMessageContainer={setCreateMessageContainer} channelData={channelData} header={header} message={message} setMessage={setMessage} userData={userData} />
                        </Route>
                    </Switch>
                </div>
            </div>
            {openUserListModal && <TotalUserListModal userList={userList} headerBarSearch={headerBarSearch} setOpenUserListModal={setOpenUserListModal} setHeaderBarSearch={setHeaderBarSearch} setOpenUserDataModal={setOpenUserDataModal} setUserDetails={setUserDetails} userDetails={userDetails} />}
            {openUserDataModal && <UserListModal refModalData={refModalData} userDetails={userDetails} setOpenUserDataModal={setOpenUserDataModal} setOpenChannelListModal={setOpenChannelListModal} setRedirectToChannel={setRedirectToChannel} userData={userData} setUserData={setUserData} setMode={setMode} userMessageList={userMessageList} setUserMessageList={setUserMessageList} />}
            {openChannelListModal && <InviteUserChannel channelList={channelList} setChannelData={setChannelData} userDetails={userDetails} channelData={channelData} header={header} setOpenChannelListModal={setOpenChannelListModal} refChannelModalSelectionData={refChannelModalSelectionData} setRedirectToChannel={setRedirectToChannel} />}
            {openNewChannelModal && <CreateNewChannel openNewChannelModal={openNewChannelModal} setOpenNewChannelModal={setOpenNewChannelModal} header={header} />}
        </>
    )
}

export default MainDashboard
