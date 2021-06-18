import axios from "axios";
import * as types from './comments.types'
import {

API_ROOT
} from "../constants";



// after recieving categories
const comments = (comments) => ({
    type: types.RECEIVED_COMMENTS,
    comments: comments,
    recievedAt:Date.now()
})

export const getComments = (id) => async (dispatch) => {
    try {
        dispatch({ type: types.LOADING_COMMENTS });
        const response =await  ApiGetComments(id)
        dispatch(comments( response))
    }catch (e) {
        dispatch({ type: types.ERROR, e });
    }
}

async function ApiGetComments(id) {

    let query = API_ROOT+`issues/${id}/comments/`
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



export const uploadComments = (name) => async (dispatch) => {
    dispatch({type: types.LOADING_POST});

    try {
        const response =await  fetchData(`categories/`, 'POST', {name:name})
        dispatch({ type: types.UPLOAD_SUCCESS});
        dispatch(getComments());
        console.log(response)
    }catch (e) {

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

export const updateComments = (id, name) => async  (dispatch) => {
    dispatch({type: types.LOADING_POST});
    try {
        const response =await  fetchData(`${id}/categories`, 'POST', {name:name})

    }catch (e) {

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

export const deleteComments = (id) => (dispatch) => {
    dispatch({type: types.LOADING_POST});
    axios
        .delete(API_ROOT +`${id}/comments` )
        .then((res) => {
            dispatch({ type: types.UPLOAD_SUCCESS});
            console.log("postRes-", res)
        })
        .catch((err) => {
            dispatch({ type: types.ERROR, error:err });
            // console.log(err)
        });
};
