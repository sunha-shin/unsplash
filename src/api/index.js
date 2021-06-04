import {request} from "../lib/fetch";

const API = {
    getPhotos: (data) => request('get', '/photos', data),
    getPhotoById: (id, data) => request('get', `/photos/${id}`, data),
    getTopics:(data) => request('get', `/topics`, data),
    getTopicById:(id, data) => request('get', `/topics/${id}`, data)
}

export default API;