import {combineReducers} from "redux";
import appReducer from './app/redux'
import photosReducer from './photos/redux'
import searchReducer from './search/redux'
import topicsReducer from './topics/redux'

const rootReducer = combineReducers({
    app: appReducer,
    photos: photosReducer,
    search: searchReducer,
    topics: topicsReducer
    // state
    // key: --> name of next state
    // vale --> value of next state
})

export default rootReducer;