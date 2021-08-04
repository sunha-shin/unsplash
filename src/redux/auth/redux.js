const initialState = {
    accessToken: null,
    user:null
}

export const Action = {
    Types: {
        UPDATE_STATE: 'AUTH/UPDATE_STATE',
        SET_ACCESS_TOKEN: 'AUTH/SET_ACCESS_TOKEN',
        GET_USER_PROFILE:'AUTH/GET_USER_PROFILE',
        SET_USER_PROFILE:'AUTH/SET_USER_PROFILE',
        LOGOUT:'AUTH/LOGOUT',
        EDIT_PROFILE:'AUTH/EDIT_PROFILE'
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        setAccessToken: (token) => ({
            type: Action.Types.SET_ACCESS_TOKEN,
            token
        }),
        getUserProfile:() => ({
            type:Action.Types.GET_USER_PROFILE
        }),
        setUserProfile:(data) => ({
            type:Action.Types.SET_USER_PROFILE,
            data
        }),
        logout: () => ({
            type: Action.Types.LOGOUT
        }),
        editProfile:(data) => ({
            type:Action.Types.EDIT_PROFILE,
            data
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_ACCESS_TOKEN: {
            return {
                ...state,
                accessToken: action.token
            }
        }
        case Action.Types.SET_USER_PROFILE : { 
            return {
                ...state,
                user:action.data
            }
        }
    }
}

export default reducer;