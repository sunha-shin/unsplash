const initialState = {
}

export const Action = {
    Types: {
        UPDATE_STATE: 'APP/UPDATE_STATE',
    },

    Creators: {
        updateState: (props) => ({ // local data 관리할때 쓰는 action
            type: Action.Types.UPDATE_STATE,
            props
        }),
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
                // object --> key와 value
                // ex) popup:true, sidebar: false, photos:[]
            }
        }
    }

}

export default reducer;