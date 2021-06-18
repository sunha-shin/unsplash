const initialState = {
    photos:{
        results:[]
    },
    collections:{
        results:[]
    },
    users:{
        results:[]
    },
    related_searches:[]
}

export const Action = {
    Types: {
        UPDATE_STATE: 'SEARCH/UPDATE_STATE',
        SEARCH_PHOTOS:'SEARCH_PHOTOS',
        SET_SEARCH_RESULT:'SET_SEARCH_RESULT'
    },

    Creators: {
        updateState:(props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        searchPhotos:(payload) => ({
            type:Action.Types.SEARCH_PHOTOS,
            payload
        }),
        setSearchResult:(payload) => ({
            type:Action.Types.SET_SEARCH_RESULT,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_SEARCH_RESULT: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default reducer;