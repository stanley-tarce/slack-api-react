import axios from 'axios'
import qs from 'qs'


const apiHooks = () => {
    let BASE_URL = '206.189.91.54'
    let contentType = { 'Content-Type': 'application/x-www-form-urlencoded' }
    let accessToken = { 'access-token': 'TTLtXEQUjd1i0BlR6q8zVg' }
    let client = { 'client': 'TdmPB-prCbBtjStYuOeuCg' }
    const postUserRegistration = (data) => {
        data = qs.stringify(data)
        return axios({
            method: 'post',
            url: `${BASE_URL}/api/v1/auth`,
            headers: { ...contentType },
            data: data
        })
            .then(response => response.text())
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    const postCreateUserSession = (data) => {
        data = qs.stringify(data)
        return axios({
            method: 'post',
            url: `${BASE_URL}/api/v1/auth/sign_in`,
            headers: { ...contentType },
            data: data
        })
            .then(response => response.text())
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    const getAllUsers = (expiry, userEmail) => {
        return axios({
            method: 'get',
            url: `${BASE_URL}/api/v1/users`,
            headers: {
                ...accessToken,
                ...client,
                'expiry': expiry,
                'uid': userEmail
            },
        })
            .then(response => response.text())
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    const getRetrieveAllChannels = () => {

    }
    return {
        postUserRegistration,
        postCreateUserSession,
        getAllUsers
    }
}

export default apiHooks