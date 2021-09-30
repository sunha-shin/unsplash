import {request} from "../lib/fetch";

const API = {
    getPhotos: (data) => request('get', '/photos', data),
    getPhotoById: (id, data) => request('get', `/photos/${id}`, data),
    getPhotoRelated:(id) => request('get',`/photos/${id}/related`),
    getTopics:(data) => request('get', `/topics`, data),
    getTopicPhotos:(slug, data) => request('get', `/topics/${slug}/photos`, data),
    getTopicById:(slug, data) => request('get', `/topics/${slug}`, data),
    searchPhotos:(data) => request('get', `/search`, data),
    getUserProfile:() => request('get', `/me`),
    editProfile:(data) => request('put', `/me`, data),
}

export default API;