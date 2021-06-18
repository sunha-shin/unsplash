import {request} from "../lib/fetch";

const API = {
    getPhotos: (data) => request('get', '/photos', data),
    getPhotoById: (id, data) => request('get', `/photos/${id}`, data),
    getPhotoRelated:(id) => request('get',`/photos/${id}/related`),
    getTopics:(data) => request('get', `/topics`, data),
    getTopicById:(id, data) => request('get', `/topics/${id}`, data),
    searchPhotos:(data) => request('get', `/search`, data),
}

export default API;