import uuid from 'react-uuid';
import{GET_ITEM, ROMOVE_ITEM} from "./actionType";

const initialState = {
    items: [
        { id: uuid(), name: "Eggs" },
        { id: uuid(), name: "Milk" },
        { id: uuid(), name: "Steak" },
        { id: uuid(), name: "Water" },
        { id: uuid(), name: "Jus" }  
    ]
    
}


const itemsReducer = (state = initialState,action) => {

    switch(action.type) {
        case GET_ITEM:
            return {
                ...state
            };
        case ROMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.id)
            };
        default: 
            return state;
    }

}

export default itemsReducer;