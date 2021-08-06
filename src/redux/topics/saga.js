import {call, all, takeLatest, put} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";
import {Action as PhotoAction} from "../photos/redux";
import _ from 'lodash';

function* getTopicsWorker({payload}) {  //destructuring -- action.payload
    const result = yield call(API.getTopics, payload);
    if (_.isEmpty(result.data)) {
        throw new Error("No data")
    }
    ;
    yield put(Action.Creators.setTopics(result.data));
}

function* getTopicByIdWorker({slug, data}) {  //destructuring -- action.payload
    const result = yield call(API.getTopicById, slug, data);
    if (_.isEmpty(result.data)) {
        throw new Error("No data")
    }
    yield put(Action.Creators.setTopicById(result.data));
}

function* getTopicPhotos({slug, data}) {
 const result = yield call(API.getTopicPhotos, slug, data);
    if (_.isEmpty(result.data)) {
        throw new Error("No data")
    }
    yield put(Action.Creators.setTopicPhotos(result.data));
}


function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, getTopicsWorker),
        takeLatest(Action.Types.GET_TOPIC_BY_ID, getTopicByIdWorker),
        takeLatest(Action.Types.GET_TOPIC_PHOTOS, getTopicPhotos)
    ])
}

export default sagas;



