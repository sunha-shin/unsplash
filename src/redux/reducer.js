const initialState = {
    popup: false,
    sidebar: false,
    photos: [],
    post: {},
    photoDetail:{}
}

export const Action = {
    Types: {
        HANDLE_POPUP: 'HANDLE_POPUP',
        HANDLE_SIDEBAR: 'HANDLE_SIDEBAR',
        SET_PHOTOS: 'SET PHOTOS',
        GET_PHOTOS:'GET_PHOTOS',
        SET_POST: 'SET POST',
        GET_PHOTO_BY_ID: 'GET_PHOTO_BY_ID',
        SET_PHOTO_BY_ID: 'SET_PHOTO_BY_ID'
    },
    Creators: {
        handlePopup: (payload) => {
            return {
                type: Action.Types.HANDLE_POPUP,
                payload
            }
        },
        handleSidebar: (payload) => {
            return {
                type: Action.Types.HANDLE_SIDEBAR,
                payload
            }
        },
        setPhotos: (payload) => {
            return {
                type: Action.Types.SET_PHOTOS,
                payload
            }
        },
        getPhotos:(payload) => ({
            type: Action.Types.GET_PHOTOS,
            payload
        }),
        setPost: (payload) => {
            return {
                type: Action.Types.SET_POST,
                payload
            }
        },
        getPhotoById: (id, payload) => ({
            type:Action.Types.GET_PHOTO_BY_ID,
            id,
            payload
        }),
        setPhotoById: (data) => ({
            type:Action.Types.SET_PHOTO_BY_ID,
            data
        })

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.HANDLE_POPUP : {
            return {
                ...state,
                popup: action.payload
            }
        }
        case Action.Types.HANDLE_SIDEBAR: {
            return {
                ...state,
                sidebar: action.payload
            }
        }
        case Action.Types.SET_PHOTOS: {
            return {
                ...state,
                photos: action.payload
            }
        }
        case Action.Types.SET_POST: {
            return {
                ...state,
                post: action.payload
            }
        }
        case Action.Types.SET_PHOTO_BY_ID: {
            return {
                ...state,
                photoDetail: action.data
            }
        }
    }
};

export default reducer;