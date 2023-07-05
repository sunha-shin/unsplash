import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "../../api";
import {States} from "../../data";
import {useSelector} from "react-redux";

// action type
const ActionTypes = {
    UPDATE_STATE: 'SEARCH/UPDATE_STATE',
    SEARCH_PHOTOS: 'SEARCH/SEARCH_PHOTOS',
    SEARCH_PHOTOS_MORE: 'SEARCH/SEARCH_PHOTOS_MORE',
    SET_SEARCH_RESULT: 'SEARCH/SET_SEARCH_RESULT'
}

// action creator
export const searchPhotos = createAsyncThunk(
    ActionTypes.SEARCH_PHOTOS,
    async ({payload}) => {
        const result = await API.searchPhotos(payload);
        return result.data;
    }
);

export const searchPhotosMore = createAsyncThunk(
    ActionTypes.SEARCH_PHOTOS_MORE,
    async ({payload, category}) => {
        const result = await API.searchPhotos(payload);
        const search = useSelector(state => state?.search);
        return {
            ...search,
            [category]: {
                ...result.data[category],
                results: [
                    ...search[category].results,
                    ...result.data[category].results
                ]
            }
        }
    });


const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        photos: {
            results: []
        },
        collections: {
            results: []
        },
        users: {

            results: []
        },
        related_searches: []
    },
    extraReducers: (builder) => {
        // searchPhotos
        builder.addCase(searchPhotos.pending, (state) => {
            state.status = States.PENDING;
        });
        builder.addCase(searchPhotos.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = States.SUCCEEDED;
        });
        builder.addCase(searchPhotos.rejected, (state, action) => {
            state.status = States.FAILED;
        });
        //searchPhotosMore
        builder.addCase(searchPhotosMore.pending, (state) => {
            state.status = States.PENDING;
        });
        builder.addCase(searchPhotosMore.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = States.SUCCEEDED;
        });
        builder.addCase(searchPhotosMore.rejected, (state, action) => {
            state.status = States.FAILED;
        });

    },
});

export default searchSlice;