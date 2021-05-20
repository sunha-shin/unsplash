import {request} from "../lib/fetch";

// fixed values are here
const API = {
    getPhotos: (data) => request('get', '/photos', data),
    getPhotoById: (id, data) => request('get', `photos/${id}`, data)
}

export default API;