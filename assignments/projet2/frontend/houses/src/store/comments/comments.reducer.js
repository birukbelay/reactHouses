
import * as types from './comments.types'
const initialState={
    commentsList:[],
    loading:false,
    loadingComments:false,
    uploadSuccess:false,
    error:false,
    errorMessage:""

}

const comments = (state= initialState, action) => {
    switch (action.type) {
        case types.RECEIVED_COMMENTS:
            return  {
                ...state,
                error: false,
                loadingComments: false,
                commentsList: action.comments
            }
        case types.ERROR:
            return  {
                ...state,
                error: true,
                loading: false,
                loadingComments:false
            }
        case types.LOADING_COMMENTS:
            return  {
                ...state,
                error: false,
                loadingComments: true,
            }
        case types.LOADING_POST:
            return  {
                ...state,
                error: false,
                loading: true,
            }

        default:
            return state
    }
};




export default comments