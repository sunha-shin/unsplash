import {bindActionCreators} from 'redux';

import {Action as AppAction} from './app/redux';
import {Action as AuthAction} from './auth/redux';
import {Action as PhotosAction} from './photos/redux';
import {Action as SearchAction} from './search/redux';
import {Action as TopicsAction} from './topics/redux';
import store from "./store";

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const authActions = bindActionCreators(AuthAction.Creators, dispatch);
export const photosActions = bindActionCreators(PhotosAction.Creators, dispatch);
export const searchActions = bindActionCreators(SearchAction.Creators, dispatch);
export const topicsActions = bindActionCreators(TopicsAction.Creators, dispatch);