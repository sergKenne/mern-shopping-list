import { GET_ITEM, ROMOVE_ITEM } from "./actionType"

export const getItem = () => {
    return {
        type:GET_ITEM
    }
}

export const removeItem = (id) => {
    return {
        type: ROMOVE_ITEM,
        id: id
    }
}



