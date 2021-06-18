
import * as types from './categories.types'

const initialState={
    categoriesList:[],
    loadingCategories:false,
    loadingPost:false,
    uploadSuccess:false,
    loadError:false,
    postError:false,


}

const categories = (state= initialState, action) => {
    switch (action.type) {
        case types.RECEIVED_CATEGORIES:
            return  {
                ...state,
                loadError: false,
                loadingCategories: false,
                categoriesList: action.categories
            }
        case types.LOADING_CATEGORY:
            return  {
                ...state,
                loadError: false,
                loadingCategories: true,
                
            }
        case types.LOADING_POST:
            return  {
                ...state,
                postError: false,
                loadingPost: true,
                uploadSuccess: false
            }
        case types.UPLOAD_SUCCESS:
            return  {
                ...state,
                postError: false,
                loadingPost: false,
                uploadSuccess: true
            }
        case types.LOAD_ERROR:
            return {
                ...state,
                loadError: true,
                loadingCategories: false,
                uploadSuccess: false,

            }
        case types.POST_ERROR:
            return {
                ...state,
                postError: true,
                loadingPost: false,
                uploadSuccess: false,

            }
        default:
            return state
    }
};




export default categories