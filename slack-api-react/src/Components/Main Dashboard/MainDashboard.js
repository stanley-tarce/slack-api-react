import React, { useCallback, useEffect, useRef } from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainNavBar from './MainNavBar/MainNavBar'
import MainBody from './MainBody/MainBody'
import './MainDashBoard.css'
import apiHooks from '../API/API'
import TotalUserListModal from './Modals/TotalUserListModal/TotalUserListModal'
import UserListModal from './Modals/UserListModal/UserListModal'
import InviteUserChannel from './Modals/InviteUserChannel/InviteUserChannel'
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
    setChannelData
}) {
    // ! START OF FUNCTIONS    
    const { getAllUsersMain, getRetrieveAllChannels } = apiHooks()
    const refModalData = useRef(null)
    const refModalInviteChannelListData = useRef(null)


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
            console.log('Array Empty')
        }
    }, [getRetrieveAllChannels, setChannelList])

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
            updateGetRetrieveAllChannels(header)
        }

    }, [header])
    useEffect(() => {
        headerBarSearch.length !== 0 ? setOpenUserListModal(true) : setOpenUserListModal(false)
    }, [headerBarSearch])
    return (
        <>
            <div className={"Main-DashBoard"}>
                <div className={"sidebarHolder"}><Sidebar channelList={channelList} channelData={channelData} setChannelData={setChannelData} /></div>
                <div className={"headerbarHolder"}><MainNavBar headerBarSearch={headerBarSearch} setOpenUserListModal={setOpenUserListModal} setHeaderBarSearch={setHeaderBarSearch} /></div>
                <div className={"MainBodyHolder"}><MainBody /></div>
            </div>
            {openUserListModal && <TotalUserListModal userList={userList} headerBarSearch={headerBarSearch} setOpenUserListModal={setOpenUserListModal} setHeaderBarSearch={setHeaderBarSearch} setOpenUserDataModal={setOpenUserDataModal} setUserDetails={setUserDetails} userDetails={userDetails} />}
            {openUserDataModal && <UserListModal refModalData={refModalData} userDetails={userDetails} setOpenUserDataModal={setOpenUserDataModal} setOpenChannelListModal={setOpenChannelListModal} />}
            {openChannelListModal && <InviteUserChannel channelList={channelList} setChannelData={setChannelData} userDetails={userDetails} channelData={channelData} header={header} />}
        </>
    )
}

export default MainDashboard
