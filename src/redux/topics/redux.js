const initialState = {
    list: [],
    topicById: {},
    photos: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'TOPICS/UPDATE_STATE',
        GET_TOPICS: 'TOPICS/GET_TOPICS',
        SET_TOPICS: 'TOPICS/SET_TOPICS',
        GET_TOPIC_BY_ID: 'TOPICS/GET_TOPIC_BY_ID',
        SET_TOPIC_BY_ID: 'TOPICS/SET_TOPIC_BY_ID',
        GET_TOPIC_PHOTOS: 'TOPICS/GET_TOPIC_PHOTOS',
        SET_TOPIC_PHOTOS: 'TOPICS/SET_TOPIC_PHOTOS',
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getTopics: (payload) => ({
            type: Action.Types.GET_TOPICS,
            payload
        }),
        setTopics: (payload) => ({
            type: Action.Types.SET_TOPICS,
            payload
        }),
        getTopicById: (slug, data) => ({
            type: Action.Types.GET_TOPIC_BY_ID,
            slug,
            data
        }),
        setTopicById: (data) => ({
            type: Action.Types.SET_TOPIC_BY_ID,
            data
        }),
        getTopicPhotos: (slug, data) => ({
            type: Action.Types.GET_TOPIC_PHOTOS,
            slug,
            data
        }),
        setTopicPhotos: (data) => ({
            type: Action.Types.SET_TOPIC_PHOTOS,
            data
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
        case Action.Types.SET_TOPICS : {
            return {
                ...state,
                list: action.payload
            }
        }
        case Action.Types.SET_TOPIC_BY_ID : {
            return {
                ...state,
                topicById: action.data
            }
        }
        case Action.Types.SET_TOPIC_PHOTOS : {
            return {
                ...state,
                photos: [...action.data]
            }
        }

    }
}

export default reducer;