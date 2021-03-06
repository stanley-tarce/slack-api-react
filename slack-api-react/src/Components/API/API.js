import axios from 'axios'
import qs from 'qs'



const apiHooks = () => {
    let source = axios.CancelToken.source()
    let BASE_URL = 'slackapi.avionschool.com/'
    let contentType = { 'Content-Type': 'application/x-www-form-urlencoded' }
    const postUserRegistration = async (dataRef) => {

        return await axios({
            method: 'POST',
            url: `https://${BASE_URL}/api/v1/auth`,
            headers: { ...contentType },
            data: qs.stringify(dataRef)
        })
    }
    const postCreateUserSession = async (dataRef) => {
        return axios({
            method: 'post',
            url: `https://${BASE_URL}/api/v1/auth/sign_in`,
            headers: { ...contentType },
            data: qs.stringify(dataRef)
        })

    }
    const getAllUsersMain = (headers) => {
        const { expiry, uid, accessToken, client } = headers
        console.log(`access-token: ${accessToken}`)
        console.log(`uid: ${uid}`)
        console.log(`expiry: ${expiry}`)
        console.log(`client: ${client}`)

        console.log('All are string!')
        return axios({
            method: 'get',
            url: `https://${BASE_URL}/api/v1/users`,
            headers: {
                'access-token': accessToken,
                'client': client,
                'expiry': expiry,
                'uid': uid
            }
        }).catch(error => console.log(error))

    }

    const getRetrieveAllChannels = async (headers) => {
        const { expiry, uid, accessToken, client } = headers
        return await axios({
            method: 'get',
            url: `https://${BASE_URL}/api/v1/channels`,
            headers: {
                'access-token': accessToken,
                'client': client,
                'expiry': expiry,
                'uid': uid
            }
        })
    }
    const getRetrieveChannel = async (headers, CHANNEL_ID) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'get',
                url: `https://${BASE_URL}/api/v1/channels/${CHANNEL_ID}`,
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
                url: `https://${BASE_URL}/api/v1/channel/add_member`,
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
    const postCreateChannelWithUsers = async (headers, dataRef) => {
        //Data -> Channel_Name & user_ids[]
        const { expiry, uid, accessToken, client } = headers
        console.log(dataRef)
        return await axios({
            method: 'post',
            url: `https://${BASE_URL}/api/v1/channels`,
            headers: {
                'access-token': accessToken,
                'client': client,
                'expiry': expiry,
                'uid': uid,
                'Allow-Access-Control-Poliy': 'http://206.189.91.54/api/v1/channels'
            },
            data: dataRef //Array Must not be a string! 
        })



    }
    const getRetrieveAllMessagesInsideChannel = async (headers, CHANNEL_ID) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'get',
                url: `https://${BASE_URL}/api/v1/messages?receiver_id=${CHANNEL_ID}&receiver_class=Channel`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
                cancelToken: source.token
            })
            return response
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('caught cancel')
            }
            return console.log(error)
        }
    }
    const getRetrieveAllMessagesFromUser = async (headers, USER_ID) => {
        const { expiry, uid, accessToken, client } = headers
        try {
            const response = await axios({
                method: 'get',
                url: `https://${BASE_URL}/api/v1/messages?receiver_id=${USER_ID}&receiver_class=User`,
                headers: {
                    'access-token': accessToken,
                    'client': client,
                    'expiry': expiry,
                    'uid': uid
                },
                cancelToken: source.token
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
                url: `https://${BASE_URL}/api/v1/messages`,
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
                url: `https://${BASE_URL}/api/v1/messages`,
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

    return {
        //Registration
        postUserRegistration,
        postCreateUserSession,
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



