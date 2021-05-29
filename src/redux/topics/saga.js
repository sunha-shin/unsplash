import {call, all, takeLatest, put} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

function* getTopicsWorker({payload}) {
    const result = yield call(API.getTopics, payload);
    console.log("@@ result", result);
    yield put(Action.Creators.setTopics(result.data))
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, getTopicsWorker)
    ])
}

export default sagas;


