import axios from 'axios';
import { GET_ITEM, REMOVE_ITEM, ADD_ITEM, ITEM_LOADING } from "./actionType";


export const getItem = () => dispatch => {
    dispatch(setLoading());
    axios
        .get("/api/items")
        .then( res => dispatch({type: GET_ITEM, payload: res.data}))
};

export const removeItem = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(() => dispatch({type: REMOVE_ITEM, id: id}))
    
};

export const addItem = (item) => dispatch => {

    axios
        .post("/api/items", item)
        .then(() => dispatch({
            type:ADD_ITEM,
            newItem: item
        }))
};

export const setLoading = () => {
    return {
        type:ITEM_LOADING
    }
}




