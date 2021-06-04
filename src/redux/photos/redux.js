const initialState = {
    list: [],
    photoById: {}
}

export const Action = {
    Types: {
        GET_PHOTOS: 'GET_PHOTOS',
        SET_PHOTOS: 'SET_PHOTOS',
        GET_PHOTO_BY_ID: 'GET_PHOTO_BY_ID',
        SET_PHOTO_BY_ID: 'SET_PHOTO_BY_ID',
    },

    Creators: {
        getPhotos: (payload) => ({
            type: Action.Types.GET_PHOTOS,
            payload
        }),
        setPhotos: (payload) => {
            return {
                type: Action.Types.SET_PHOTOS,
                payload
            }
        },
        getPhotoById: (id, payload) => ({
            type: Action.Types.GET_PHOTO_BY_ID,
            id,
            payload
        }),
        setPhotoById: (data) => ({
            type: Action.Types.SET_PHOTO_BY_ID,
            data
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.SET_PHOTOS: {
            return {
                ...state,
                list: action.payload
            }
        }
        case Action.Types.SET_PHOTO_BY_ID: {
            return {
                ...state,
                photoById: action.data
            }
        }
    }
}

export default reducer;