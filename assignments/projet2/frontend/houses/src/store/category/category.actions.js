import axios from "axios";
import * as types from './categories.types'
import {

API_ROOT
} from "../constants";

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("/auth/login", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};

export const CreateItem = (items) => async (dispatch) => {
    dispatch({type: types.LOADING_POST});
    try {
        const res = await axios.post(API_ROOT+"/house", items);
        dispatch({ type: types.UPLOAD_SUCCESS, payload: res.data });
        //to update the list
        dispatch(getHouses());
    } catch (err) {
        dispatch({ type: types.POST_ERROR});
    }
};

export const deleteCategory = (id) => (dispatch) => {
    dispatch({type: types.LOADING_POST});
    axios
        .delete(API_ROOT +`house/${id}` )
        .then((res) => {
            dispatch({ type: types.UPLOAD_SUCCESS});
            dispatch(getHouses());

        })
        .catch((err) => {
            dispatch({ type: types.POST_ERROR, error:err });
            // console.log(err)
        });
};

export const updateCategory = (id, items) => async  (dispatch) => {
    dispatch({type: types.LOADING_POST});
    try {
        dispatch({type: types.LOADING_POST});
        try {
            const res = await axios.post(API_ROOT+`house/${id}`, items);
            dispatch({ type: types.UPLOAD_SUCCESS, payload: res.data });
            //to update the list
            dispatch(getHouses());
        } catch (err) {
            dispatch({ type: types.POST_ERROR});
        }

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

export const getHouses = () => async (dispatch) => {
    try {
        dispatch({ type: types.LOADING_CATEGORY });
        const response =await  ApiGetCategories()
        dispatch(receivedInitialCategories( response))
    }catch (e) {
        dispatch({ type: types.LOAD_ERROR, e });
    }
}

async function ApiGetCategories() {

    let query = API_ROOT+`house/`
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
