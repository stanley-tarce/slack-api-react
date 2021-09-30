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
    const [userAccessToken, setAccessToken] = useState('')
    const [userClient, setClient] = useState('')
    const [userExpiry, setExpiry] = useState('')
    const [userUid, setUid] = useState('')
    const [header, setHeader] = useState({})
    const [userList, setUserList] = useState([])

    return {
        // ? INITIAL STATE
        userAccessToken,
        userClient,
        userExpiry,
        userUid,
        header,
        userList,
        // ? Change of State
        setAccessToken,
        setClient,
        setExpiry,
        setUid,
        setHeader,
        setUserList

    }
}

export default MainHooks
