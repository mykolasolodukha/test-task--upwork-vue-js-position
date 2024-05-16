import axios from 'axios'
import Router from '../router'

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {

    if (error.response.status === 404 && !refresh) {

        localStorage.removeItem("token");
        window.location.href = window.location.origin + '/authentication/signin/basic'
    }
    refresh = false;
    return error;
});

