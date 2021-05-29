import {takeLatest, call, put} from 'redux-saga/effects';
import _ from 'lodash';
import API from "../../api";
import {Action} from "./redux";


function* getPhotosWorker(action) {
    try {
        const result = yield call(API.getPhotos, action.payload);
        if(!_.isEmpty(result)) {
            yield put(Action.Creators.setPhotos(result.data));
        }
    } catch (e) {
        throw new Error('getPhotos api failed')
    }
}

function* getPhotoByIdWorker(action) {
    try {
        const result = yield call(API.getPhotoById, action.id, action.payload);
        if(!_.isEmpty(result)) {
            yield put(Action.Creators.setPhotoById(result.data));
        }
    } catch (e) {
        throw new Error('getPhotoById api failed')
    }
}

function* sagas() {
    yield takeLatest(Action.Types.GET_PHOTOS, getPhotosWorker)
    yield takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoByIdWorker)
}

export default sagas;


