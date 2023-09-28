import axios from "axios"
const URL_APi = 'http://localhost:5555/api/prompt'

export const makeRequest = async (message)=>{
    const {data} = await axios.post(URL_APi, message)

    return data
}