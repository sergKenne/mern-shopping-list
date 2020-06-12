import{GET_ITEM, REMOVE_ITEM, ADD_ITEM, ITEM_LOADING} from "./actionType";

const initialState = {
    items: [],
    loading: false
}

const itemsReducer = (state = initialState,action) => {

    switch(action.type) {
        case GET_ITEM:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case ADD_ITEM:
            return {
                ...state, 
                items: [...state.items, action.newItem]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter( item => item._id !== action.id)
            };
        case ITEM_LOADING:
            return {
                ...state,
                loading: true,
            }
        default: 
            return state;
    }

}

export default itemsReducer;