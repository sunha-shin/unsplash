import {call, all, takeLatest, put} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";
import {LocalStorage} from "../../lib/localStorage";
import {toast} from 'react-toastify';

function* getUserProfileWorker() {
    try {
        const result = yield call(API.getUserProfile)
        if (result.data) {
            yield put(Action.Creators.setUserProfile(result.data))
            yield put(Action.Creators.updateState({
                itLoggedIn: true
            }))
        }
    } catch (e) {
        toast(e.response.status);
    }
}

function* logoutWorker() {
    LocalStorage.accessToken.remove();
    yield put(Action.Creators.updateState({
        user: null,
        isLoggedIn: false
    }))
}

function* editProfile({data}) {
    const result = yield call(API.editProfile, data);
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

