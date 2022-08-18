import { CART_ACTION_TYPES } from "./cart.type"

export const addItemToCart = (data) => {
    return {type: CART_ACTION_TYPES.ADD_ITEM_TO_CART , payload: data}
}

export const removeItemFromCart = (data) => {
    return {type : CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART , payload: data}
}

export const changeCartStatus = () => {
    return {type: CART_ACTION_TYPES.CHANGE_CART_STATUS}
}