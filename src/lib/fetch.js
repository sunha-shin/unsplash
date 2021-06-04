import axios from 'axios';
import {API_BASE_URL, CLIENT_ID} from "../constants";

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

        if (method === 'get') {
            config.params = data;
        } else {
            config.data = data;
        }

        //const token = window.localStorage.getItem('access_token');
        if (!!CLIENT_ID) {
            axiosInstance.defaults.headers.common['Authorization'] = `Client_ID ${CLIENT_ID}`;
        }

        return axiosInstance(config);
    } catch (err) {
        console.log("@@ err", err)
        return err;
    }
}