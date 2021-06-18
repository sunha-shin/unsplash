import {takeLatest, call, put, all} from 'redux-saga/effects';
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

function* getPhotoDetailWorker({id}) {
    yield put(Action.Creators.getPhotoById(id));
    yield put(Action.Creators.getPhotoRelated(id));
}

function* getPhotoByIdWorker({id, payload}) {
    try {
        const result = yield call(API.getPhotoById, id, payload);
        if(!_.isEmpty(result.data)) {
            yield put(Action.Creators.setPhotoById(id, result.data));
        }
    } catch (e) {
        throw new Error('getPhotoById api failed')
    }
}

function* getPhotoRelatedWorker({id}) {
    const result = yield call(API.getPhotoRelated, id);
    if(!_.isEmpty((result.data))) {
        yield put(Action.Creators.setPhotoRelated(id, result.data));
    }
}

function* openPhotoPopupWorker({id}) {
    // yield put(Action.Creators.getPhotoDetail(id));
    // yield put(Action.Creators.getPhotoRelated(id));
    yield put(Action.Creators.getPhotoDetail(id));

    yield put(Action.Creators.updateState({
        openPhotoPopup:true,
        currentPhotoId:id,
    }));
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, getPhotosWorker),
        takeLatest(Action.Types.GET_PHOTO_DETAIL, getPhotoDetailWorker),
        takeLatest(Action.Types.GET_PHOTO_BY_ID, getPhotoByIdWorker),
        takeLatest(Action.Types.GET_PHOTO_RELATED, getPhotoRelatedWorker),
        takeLatest(Action.Types.OPEN_PHOTO_POPUP, openPhotoPopupWorker),
    ])
}

export default sagas;


