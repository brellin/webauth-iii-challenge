import axios from 'axios'

export default function () {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: `${token}`,
            'content-type': 'application/json'
        }
    })
}