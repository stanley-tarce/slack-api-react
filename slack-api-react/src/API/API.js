import axios from 'axios'
import qs from 'qs'


const apiHooks = () => {
    let BASE_URL = '206.189.91.54'
    let contentType = { 'Content-Type': 'application/x-www-form-urlencoded' }
    let client = { 'client': 'TdmPB-prCbBtjStYuOeuCg' }
    const postUserRegistration = async (data) => {
        data = qs.stringify(data)
        try {
            const response = await axios({
                method: 'post',
                url: `${BASE_URL}/api/v1/auth`,
                headers: { ...contentType },
                data: data
            })
            const output = response.data
            return output
        } catch (error) {
            return console.log(error)
        }
    }
    const postCreateUserSession = async (data) => {
        data = qs.stringify(data)
        try {
            const response = await axios({
                method: 'post',
                url: `${BASE_URL}/api/v1/auth/sign_in`,
                headers: { ...contentType },
                data: data
            })
            const output = response.data
            return output
        } catch (error) {
            return console.log(error)
        }
    }
    const getAllUsers = async (expiry, userEmail, accessToken) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/api/v1/users`,
                headers: {
                    'access-token': qs.stringify(accessToken),
                    ...client,
                    'expiry': qs.stringify(expiry),
                    'uid': qs.stringify(userEmail)
                },
            })
            const output = response.data
            return output
        } catch (error) {
            return console.log(error)
        }
    }
    const getRetrieveAllChannels = async (expiry, userEmail, accessToken) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/api/v1/channels`,
                headers: {
                    'access-token': qs.stringify(accessToken),
                    ...client,
                    'expiry': qs.stringify(expiry),
                    'uid': qs.stringify(userEmail)
                },
            })
            const output = response.data
            return output
        } catch (error) {
            return console.log(error)
        }
    }
    const getRetrieveChannel = async (expiry, userEmail, accessToken) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/api/v1/channels`,
                headers: {
                    'access-token': qs.stringify(accessToken),
                    ...client,
                    'expiry': qs.stringify(expiry),
                    'uid': qs.stringify(userEmail)
                },
            })
            const output = response.data
            return output
        } catch (error) {
            return console.log(error)
        }
    }

    return {
        postUserRegistration,
        postCreateUserSession,
        getAllUsers,
        getRetrieveAllChannels,
        getRetrieveChannel

    }
}

export default apiHooks