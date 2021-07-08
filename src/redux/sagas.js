import {all, fork} from 'redux-saga/effects'
import appSaga from './app/saga';
import photosSaga from './photos/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';
import authSaga from './auth/saga';

function* sagas() {
    yield all([ // 병렬 --> 한꺼번에 동시에 시작
        fork(appSaga),
        fork(authSaga),
        fork(photosSaga),
        fork(searchSaga),
        fork(topicsSaga)
    ])
}

export default sagas;