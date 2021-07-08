import {call, all, takeLatest, put} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";
import {LocalStorage} from "../../lib/localStorage";

function* getUserProfileWorker() {
    const result = yield call(API.getUserProfile)
    console.log("@@ result", result)
    if (result.data) {
        yield put(Action.Creators.setUserProfile(result.data))
        yield put(Action.Creators.updateState({
            itLoggedIn:true
        }))
    }
}

function* logoutWorker() {
    LocalStorage.accessToken.remove();
    yield put(Action.Creators.updateState({
        user:null,
        isLoggedIn:false
    }))
}

function* editProfile({data}) {
    const result = yield call(API.editUserProfile, data);
    console.log("@@ result", result)
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_USER_PROFILE, getUserProfileWorker),
        takeLatest(Action.Types.LOGOUT, logoutWorker),
        takeLatest(Action.Types.EDIT_PROFILE, editProfile)
    ])
}

export default sagas;

