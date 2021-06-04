import {call, all, takeLatest, put} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";
import _ from 'lodash';

function* getTopicsWorker({payload}) {  //destructuring -- action.payload
    const result = yield call(API.getTopics, payload);
    console.log("@@ result.data", result.data)
    if (!_.isEmpty(result.data)) {
        yield put(Action.Creators.setTopics(result.data));
    }
}

function* getTopicByIdWorker({slug, data}) {  //destructuring -- action.payload
    const result = yield call(API.getTopicById, slug, data);
    console.log("@@ result", result)
    if (!_.isEmpty(result.data)) {
        yield put(Action.Creators.setTopicById(result.data));
    }
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, getTopicsWorker),
        takeLatest(Action.Types.GET_TOPIC_BY_ID, getTopicByIdWorker),
    ])
}

export default sagas;



