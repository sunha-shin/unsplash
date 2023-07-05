import {configureStore} from "@reduxjs/toolkit";
import appReducer from "../redux/app/redux";
import authReducer from "../redux/auth/redux";
import photosReducer from "../redux/photos/redux";
import searchReducer from "../redux/search/redux";
import topicsReducer from "../redux/topics/redux";
import searchSlice from "./search/searchSlice";

const store = configureStore({
    reducer: {
        // app: appReducer,
        // auth:authReducer,
        // photos: photosReducer,
        search: searchSlice.reducer,
        // topics: topicsReducer

    }
});

export default store;