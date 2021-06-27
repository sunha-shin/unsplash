import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";
import _ from 'lodash';

const searchPhotosWorker = function* ({payload}) {
    const result = yield call(API.searchPhotos, payload);
    if (!_.isEmpty(result.data)) {
        yield put(Action.Creators.setSearchResult(result.data));
    }
}

function* searchPhotosMoreWorker({payload, category}) {
    const result = yield call(API.searchPhotos, payload);
    const {search} = yield select();

    if (!_.isEmpty(result.data)) {
        yield put(Action.Creators.setSearchResult({
            ...search,
            [category]: {
                ...result.data[category],
                results: [
                    ...search[category].results,
                    ...result.data[category].results
                ]
            }
        }))
    }
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, searchPhotosWorker),
        takeLatest(Action.Types.SEARCH_PHOTOS_MORE, searchPhotosMoreWorker),
    ])
}

export default sagas;


