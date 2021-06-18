import * as constants from "../constants";
import * as types from "./issues.types";
import mock from '../Mock/aip'
import axios from "axios";


//calling the shop.getproducts Method
export const getPendingIssues = (type) => async (dispatch) => {
    try {
        dispatch({ type: types.REQUEST_ISSUES });

        const response =await  ApiGetIssues(type)
        console.log("MainIssues",response)
        dispatch(receivedIssues( response))
        //==============================mOCK====================
        // mock.getIssues(issues=>{
        //     console.log("index",issues)
        //     dispatch(receivedIssues(issues))
        // })
    //    =============================================================

    }catch (e) {
        console.log(e)
        dispatch({ type: types.LOADING_ERROR, e });

    }
}

const receivedIssues = ( issues) => ({
    type: types.RECEIVED_ISSUES,
    issues,
    recievedAt:Date.now()
})

async function ApiGetIssues(type) {
    // let query = constants.API_ROOT+`/?limit=${constants.Limit}&offset=${pageNo}`
    let query = constants.API_ROOT+`issues/${type}/`
    const res = await fetch(query);
    return await res.json()
}




const approval = ( id, approvalType) => ({
    type: types.APPROVAL_POSTED,
    id,
    approvalType,
    recievedAt:Date.now()
})

export const setApproval = (id, type) => (dispatch) => {
    dispatch({type: types.POSTING_APPROVAL});
    //=============================MOCK===========
    // mock.approve(id, ()=>{
    //     dispatch(approval(id, type))
    // })
    //========================================================
    axios
        .post(constants.API_ROOT + `issues/${id}/${type}/`)
        .then((res) => {
            dispatch(approval(id, type));
            console.log("postRes-", res)
        })
        .catch((err) => {
            dispatch({ type: types.LOADING_ERROR, error:err });
            console.log(err)
        });
};