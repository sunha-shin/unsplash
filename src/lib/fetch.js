import axios from "axios";

const config = {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9tBRoriecI5eMKjhs5m1xQ9SKgxLtczRQy2vRTQX7qE'
    }
};

const axiosInstance = axios.create(config);

export const request = (method, url, data) => {
    try {
        let config = {
            url,
            method,
            params: data
        }

        if (method === 'get') {
            config.params = data;
        } else {
            config.data = data
        }
    } catch (err) {
        return err;
    }


    return axiosInstance(config);
};
