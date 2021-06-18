import axios from "axios";
import * as types from './categories.types'
import {

API_ROOT
} from "../constants";



export const uploadCategory = (name) => async (dispatch) => {
    dispatch({type: types.LOADING_POST});

    try {
        const response =await  fetchData(`categories/`, 'POST', {name:name})
        dispatch({ type: types.UPLOAD_SUCCESS});
        dispatch(getCategories());
        // console.log(response)
    }catch (e) {
        dispatch({ type: types.POST_ERROR});
    }

    // axios
    //     .post(API_ROOT + 'categories/', formData)
    //     .then((res) => {
    //         dispatch({ type: types.UPLOAD_SUCCESS});
    //         dispatch(getCategories());
    //         console.log("postRes-", res)
    //     })
    //     .catch((err) => {
    //         dispatch({ type: types.ERROR, error:err });
    //         console.log(err)
    //     });


};

export const deleteCategory = (id) => (dispatch) => {
    dispatch({type: types.LOADING_POST});
    axios
        .delete(API_ROOT +`${id}/categories` )
        .then((res) => {
            dispatch({ type: types.UPLOAD_SUCCESS});
            dispatch(getCategories());

        })
        .catch((err) => {
            dispatch({ type: types.POST_ERROR, error:err });
            // console.log(err)
        });
};

export const updateCategory = (id, name) => async  (dispatch) => {
    dispatch({type: types.LOADING_POST});
    try {
        const response =await  fetchData(`${id}/categories`, 'POST', {name:name})

    }catch (e) {
        dispatch({type: types.POST_ERROR});
    }
    // axios
    //     .post(API_ROOT + )
    //     .then((res) => {
    //         dispatch({ type: types.UPLOAD_SUCCESS});
    //
    //     })
    //     .catch((err) => {
    //         dispatch({ type: types.ERROR, error:err });
    //
    //     });
};


// after recieving categories
const receivedInitialCategories = ( categories) => ({
    type: types.RECEIVED_CATEGORIES,
    categories,
    recievedAt:Date.now()
})

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: types.LOADING_CATEGORY });
        const response =await  ApiGetCategories()
        dispatch(receivedInitialCategories( response))
    }catch (e) {
        dispatch({ type: types.LOAD_ERROR, e });
    }
}

async function ApiGetCategories() {

    let query = API_ROOT+`categories/`
    // const res = await fetch(query)

    const res = await fetch(query);
    return await res.json()
}

async function fetchData(url = '', method='POST', data = {}) {

    let query = API_ROOT+url
    const response = await fetch(query, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(data), // body data type must match "Content-Type" header
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}
