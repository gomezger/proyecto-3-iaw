import axios from "axios";

const api_url = "https://proyecto2-german.herokuapp.com/api/";

const getHeaders = (token) => {
    return {
        headers : {
            'X-Requested-With' : 'XMLHttpRequest',
            'Content-Type' : 'application/json',
            'Accept' : '*/*',
            'Authorization' : 'Bearer ' + token
        }
    }
}

export const getApi = (path, token) => {
    return axios.get(api_url + path, getHeaders(token));   
}

export const postApi = (path, data, token) => {
    return axios.post(api_url + path, data, getHeaders(token));   
}

export const getToken = () => {
    return localStorage.getItem('token');
} 
