import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";
import _ from 'lodash';

const searchPhotosWorker = function* ({payload}) {
    const result = yield call(API.searchPhotos, payload);
    if(!_.isEmpty(result.data)) {
        yield put(Action.Creators.setSearchResult(result.data));
    }
}


function* sagas() {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotosWorker)
    ])
}

export default sagas;


