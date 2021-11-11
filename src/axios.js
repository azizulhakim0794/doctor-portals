import axios from "axios"
const instance = axios.create({
    baseURL:"https://mysterious-scrubland-33303.herokuapp.com"
})
export default instance;