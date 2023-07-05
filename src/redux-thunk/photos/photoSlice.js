// action type
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "../../api";
import {useSelector} from "react-redux";
import {States} from "../../data";
import {searchPhotos, searchPhotosMore} from "../search/searchSlice";

const ActionTypes = {
    UPDATE_STATE: 'UPDATE_STATE',
    GET_PHOTOS: 'GET_PHOTOS',
    SET_PHOTOS: 'SET_PHOTOS',
    GET_PHOTOS_MORE: 'GET_PHOTOS_MORE',
    GET_PHOTO_BY_ID: 'GET_PHOTO_BY_ID',
    SET_PHOTO_BY_ID: 'SET_PHOTO_BY_ID',
    GET_PHOTO_RELATED: 'GET_PHOTO_RELATED',
    SET_PHOTO_RELATED: 'SET_PHOTO_RELATED',
    GET_PHOTO_DETAIL: 'GET_PHOTO_DETAIL',
    OPEN_PHOTO_POPUP: 'OPEN_PHOTO_POPUP',
}

// action creator
export const getPhotos = createAsyncThunk(
    ActionTypes.GET_PHOTOS,
    async ({payload}) => {
        const result = await API.getPhotos(payload);
        return result.data;
    }
);

// export const getPhotoDetail = createAsyncThunk(
//     ActionTypes.GET_PHOTO_DETAIL,
//     async ({id}) => {
//         const result = await API.getPhotoById(id);
//     }
// );


export const getPhotoById = createAsyncThunk(
    ActionTypes.GET_PHOTO_BY_ID,
    async ({id, payload}) => {
        const result = await API.getPhotoById(id, payload);
        return result.data;
    }
);

export const getPhotoRelated = createAsyncThunk(
    ActionTypes.GET_PHOTO_RELATED,
    async ({id}) => {
        const result = await API.getPhotoRelated(id);
        return result.data;
    }
);
export const openPhotoPopup = createAsyncThunk(
    // Dispatched Action from MasonryList components
    ActionTypes.SEARCH_PHOTOS,
    async ({payload}) => {
        const result = await API.searchPhotos(payload);
        return result.data;
    }
);

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState: {},
    extraReducers: (builder) => {
        // searchPhotos
        builder.addCase(getPhotos.pending, (state) => {
            state.status = States.PENDING;
        });
        builder.addCase(getPhotos.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = States.SUCCEEDED;
        });
        builder.addCase(getPhotos.rejected, (state, action) => {
            state.status = States.FAILED;
        });
        //searchPhotosMore
        builder.addCase(getPhotoById.pending, (state) => {
            state.status = States.PENDING;
        });
        builder.addCase(getPhotoById.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = States.SUCCEEDED;
        });
        builder.addCase(getPhotoById.rejected, (state, action) => {
            state.status = States.FAILED;
        });
        //getPhotoRelated
        builder.addCase(getPhotoRelated.pending, (state) => {
            state.status = States.PENDING;
        });
        builder.addCase(getPhotoRelated.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = States.SUCCEEDED;
        });
        builder.addCase(getPhotoRelated.rejected, (state, action) => {
            state.status = States.FAILED;
        });
        //openPhotoPopup
        builder.addCase(openPhotoPopup.pending, (state) => {
            state.status = States.PENDING;
        });
        builder.addCase(openPhotoPopup.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = States.SUCCEEDED;
        });
        builder.addCase(openPhotoPopup.rejected, (state, action) => {
            state.status = States.FAILED;
        });

    },
});

export default photoSlice;