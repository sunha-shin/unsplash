import axios from 'axios';
import {API_BASE_URL, CLIENT_ID} from "../constants";

export const RequestConstants ={
    GET:'get'
}


const config = {
    baseURL: API_BASE_URL
};

const axiosInstance = axios.create(config);

export const request = (method, url, data) => {
    try {
        let config = {
            url,
            method
        }

        if (method === RequestConstants.GET) {
            config.params = data;
        } else {
            config.data = data;
        }

        const token = window.localStorage.getItem('access_token');

        if(token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        return axiosInstance(config);
    } catch (err) {
        console.log("@@ err", err)
        return err;
    }
}