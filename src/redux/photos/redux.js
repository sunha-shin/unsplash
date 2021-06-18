const initialState = {
    list: [],
    photoById: {},
    photoRelated: {},
    openPhotoPopup: false
}

export const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',
        GET_PHOTOS: 'GET_PHOTOS',
        SET_PHOTOS: 'SET_PHOTOS',
        GET_PHOTO_BY_ID: 'GET_PHOTO_BY_ID',
        SET_PHOTO_BY_ID: 'SET_PHOTO_BY_ID',
        GET_PHOTO_RELATED: 'GET_PHOTO_RELATED',
        SET_PHOTO_RELATED: 'SET_PHOTO_RELATED',
        GET_PHOTO_DETAIL: 'GET_PHOTO_DETAIL',
        OPEN_PHOTO_POPUP: 'OPEN_PHOTO_POPUP',
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getPhotos: (payload) => ({
            type: Action.Types.GET_PHOTOS,
            payload
        }),
        setPhotos: (payload) => ({
            type: Action.Types.SET_PHOTOS,
            payload
        }),
        getPhotoById: (id, payload) => ({
            type: Action.Types.GET_PHOTO_BY_ID,
            id,
            payload
        }),
        setPhotoById: (id, data) => ({
            type: Action.Types.SET_PHOTO_BY_ID,
            id,
            data
        }),
        getPhotoRelated: (id) => ({
            type: Action.Types.GET_PHOTO_RELATED,
            id
        }),
        setPhotoRelated: (id, data) => ({
            type: Action.Types.SET_PHOTO_RELATED,
            data,
            id
        }),
        openPhotoPopup: (id) => ({
            type: Action.Types.OPEN_PHOTO_POPUP,
            id
        }),
        getPhotoDetail: (id) => ({
            type: Action.Types.GET_PHOTO_DETAIL,
            id
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
                photoById: {
                    ...state.photoById,
                    [action.id]: action.data
                }
            }
        }
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_PHOTO_RELATED: {
            return {
                ...state,
                photoRelated: {
                    ...state.photoRelated,
                    [action.id]: action.data
                }
            }
        }
    }
}

export default reducer;