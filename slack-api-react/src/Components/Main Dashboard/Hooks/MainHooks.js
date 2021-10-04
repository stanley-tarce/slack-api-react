import { useState } from "react";
/**
 * * CREATE A HOOKS API CONTAINER WITH THE FOLLOWING ITEMS
 * ? 1. API for Channel Lists
 * ? 2. Channel list with list of users
 * ? 3. Slack can only message users from the SAME channel
 * ? 4. You can send a message in any of the channels
 * ?
 *
 *
 *
 * * API CALLS and where to use it
 * ? USER SESSION
 * ? 1. Post Registration -> Sign-up
 * ? 2. Create a User Session -> Log-in
 * ? 3. Retrieve All Users  -> Main Dashboard (Not Visible to any containers so the state will be hidden) const {userList,setUserList} = useState([])
 * ? CHANNELS
 * ! 1. RETRIEVE ALL CHANNEL where was invited -> Sending a list of all channels that the user was invited from.
 * ? 2. ?Retrieve a Channel? -> SIMPLY RETRIEVE A CHANNEL (Can be a Modal Search Button) -> No Layout yet
 * ? 3. Invite User to a Channel -> Invite User -> Modal inside the channel chat ->
 * ? 4. Create a new Channel with user -> No Modal layout yet
 * ? MESSAGES
 * ? 1. Retrieve Messages in a Channel
 * ? 2. Retrieve Messages in a user
 * ? 3. Create Message in a Channel
 * ? 4. Create Message from a User
 */


/** TOP LEVEL HOOKS */
function MainHooks() {
    const [header, setHeader] = useState({
        expiry: '',
        uid: '',
        accessToken: '',
        client: ''
    })
    const [userList, setUserList] = useState([])
    const [channelList, setChannelList] = useState([])
    const [userMessageList, setUserMessageList] = useState([])

    const [headerBarSearch, setHeaderBarSearch] = useState('')
    //UserDataModal
    const [userDetails, setUserDetails] = useState({
        name: '',
        id: '',
        uid: '',
        receiver_class: 'User'
    })
    const [channelData, setChannelData] = useState({
        channelId: '',
        name: '',
        owner: '',
        channel_members: '',
        receiver_class: 'Channel'
    })
    //Channel Function Hooks
    const [openUserListModal, setOpenUserListModal] = useState(false)
    const [openUserDataModal, setOpenUserDataModal] = useState(false)
    const [openChannelListModal, setOpenChannelListModal] = useState(false)

    //Create Messages
    const [createMessageContainer, setCreateMessageContainer] = useState({

    })
    const [mode, setMode] = useState('')
    const [message, setMessage] = useState('')
    const [redirectToChannel, setRedirectToChannel] = useState(true)

    const [userData, setUserData] = useState({
        id: '', uid: '',
        receiver_class: 'User'
    })
    const [openNewChannelModal, setOpenNewChannelModal] = useState(false);
    return {
        // ? INITIAL STATE
        header,
        userList,
        channelList,
        userMessageList,

        openUserListModal,
        headerBarSearch,
        openUserDataModal,
        openChannelListModal,

        userDetails,
        channelData,
        userData,


        mode,
        createMessageContainer,
        message,
        redirectToChannel,

        openNewChannelModal,
        // ? Change of State
        setHeader,
        setUserList,
        setChannelList,

        setOpenUserListModal,
        setHeaderBarSearch,
        setOpenUserDataModal,
        setOpenChannelListModal,

        setUserDetails,
        setChannelData,
        setCreateMessageContainer,
        setMode,
        setMessage,
        setRedirectToChannel,
        setUserMessageList,
        setUserData,
        setOpenNewChannelModal
    }
}

export default MainHooks
