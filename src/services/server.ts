import axios from "axios";

const USER_API_URL = "http://localhost:9000/user/";

const getJobs = () => {
    return axios.get(USER_API_URL + '/jobs').then(res => {
        console.log(res);
        return res.data;
    }).catch(err => {
        console.log(err);
    }) 
}

const api = {
    getJobs
}

export default api;