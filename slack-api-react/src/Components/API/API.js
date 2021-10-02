import axios from 'axios'
import qs from 'qs'



const apiHooks = () => {

    /** PARAMETERS 
     * * DEFAULT STATIC HEADERS
     *  1. BASE_URL 
     *  2. contentType
     * ! HEADERS REQUIRED AFTER USER LOG-IN
     *  1. client
     *  2. expiry
     *  3. token ID 
     *  4. uid -> Email of User
    */
    let BASE_URL = '206.189.91.54'
    let contentType = { 'Content-Type': 'application/x-www-form-urlencoded' }
    const postUserRegistration = async (dataRef) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `http://${BASE_URL}/api/v1/auth`,
                headers: { ...contentType },
                data: qs.stringify(dataRef)
            })
            return console.log(response.data)
        } catch (error) {
            return console.log(error)
        }
    }
    const postCreateUserSession = async (dataRef) => {
        return await axios({
            method: 'post',
            url: `http://${BASE_URL}/api/v1/auth/sign_in`,
            headers: { ...contentType },
            data: qs.stringify(dataRef)
        }).catch(error => console.log(error))

    }
    const getAllUsersMain = async (headers) => {
        const { expiry, uid, accessToken, client } = headers
        console.log(`access-token: ${accessToken}`)
        console.log(`uid: ${uid}`)
        console.log(`expiry: ${expiry}`)
        console.log(`client: ${client}`)

        console.log('All are string!')
        return await axios({
            method: 'get',
            url: `http://${BASE_URL}/api/v1/users`,
            headers: {
                'access-token': accessToken,
                'client': client,
                'expiry': expiry,
                'uid': uid
            }
        }).catch(error => console.log(error))

    }
    const getAllUsers = async (headers) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'get',
                url: `http://${BASE_URL}/api/v1/users`,
                headers: {
                    'access-token': qs.stringify(accessToken),
                    'client': qs.stringify(client),
                    'expiry': qs.stringify(expiry),
                    'uid': qs.stringify(uid)
                },
            })
            let dataContainer = []
            response.data.map(data2 => dataContainer = [...dataContainer, { id: data2.id, uid: data2.uid }])
            dataContainer.sort((a, b) => a.id - b.id || a.uid.localeCompare(b.uid))
            return dataContainer

        } catch (error) {
            return console.log(error)
        }
    }
    const getRetrieveAllChannels = async (headers) => {
        const { expiry, uid, accessToken, client } = headers
        return await axios({
            method: 'get',
            url: `http://${BASE_URL}/api/v1/channels`,
            headers: {
                'access-token': accessToken,
                'client': client,
                'expiry': expiry,
                'uid': uid
            }
        }).catch(error => console.log(error))
    }
    const getRetrieveChannel = async (headers, CHANNEL_ID) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'get',
                url: `http://${BASE_URL}/api/v1/channels/${CHANNEL_ID}`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
            })
            return response
        } catch (error) {
            return console.log(error)
        }
    }
    const postInviteUserToChannel = async (headers, dataRef) => {
        //Data -> Channel_ID (id) & member_id
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'post',
                url: `http://${BASE_URL}/api/v1/channel/add_member`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
                data: qs.stringify(dataRef)
            })
            return console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }
    const postCreateChannelWithUsers = async (headers, dataRef) => {
        //Data -> Channel_Name & user_ids[]
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'post',
                url: `http://${BASE_URL}/api/v1/channels`,
                headers: {
                    'access-token': qs.stringify(accessToken),
                    'client': qs.stringify(client),
                    'expiry': qs.stringify(expiry),
                    'uid': qs.stringify(uid)
                },
                data: qs.stringify(dataRef)
            })
            return console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }
    const getRetrieveAllMessagesInsideChannel = async (headers, CHANNEL_ID) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'get',
                url: `http://${BASE_URL}/api/v1/messages?receiver_id=${CHANNEL_ID}&receiver_class=Channel`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
            })
            return response
        } catch (error) {
            return console.log(error)
        }
    }


    const getRetrieveAllMessagesFromUser = async (headers, USER_ID) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'get',
                url: `http://${BASE_URL}/api/v1/messages?receiver_id=${USER_ID}&receiver_class=User`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
            })
            return response
        } catch (error) {
            return console.log(error)
        }
    }
    const postCreateMessageInAChannel = async (headers, dataRef) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'post',
                url: `http://${BASE_URL}/api/v1/messages`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
                data: qs.stringify(dataRef)
            })
            return response
        }
        catch (error) {
            console.log(error)
        }
    }
    const postCreateDirectMessagetoUser = async (headers, dataRef) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'post',
                url: `http://${BASE_URL}/api/v1/messages`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
                data: qs.stringify(dataRef)
            })
            return console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    return {
        //Registration
        postUserRegistration,
        postCreateUserSession,
        getAllUsers,
        getAllUsersMain,
        //Channels
        getRetrieveAllChannels,
        getRetrieveChannel,
        postInviteUserToChannel,
        postCreateChannelWithUsers,
        //Messages
        getRetrieveAllMessagesInsideChannel,
        getRetrieveAllMessagesFromUser,
        postCreateMessageInAChannel,
        postCreateDirectMessagetoUser
    }
}

export default apiHooks



