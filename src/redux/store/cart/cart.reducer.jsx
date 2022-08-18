import { CART_ACTION_TYPES } from "./cart.type"

const INITIAL_STATE = {
    cardStatus: false,
    // setCardStatus: (status) => !status,
    cartItems: [],
    // addItemToCart: () => { }
}

const addCartItem = (cartItems, producttoAdd) => {

    const existingCardItem = cartItems.find(
        (cartItem) => cartItem.id === producttoAdd.id
    )


    if (existingCardItem) {
        return cartItems.map((cartItem) => cartItem.id === producttoAdd.id ? 
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...producttoAdd, quantity: 1 }]
}

const removeCartItem = (cartItems , productToDelete) => {
    let rest = cartItems.filter((item) => item.id !== productToDelete.id)

    return rest
}


export const cartReducers = (state = INITIAL_STATE , action = {}) => {
    const { type , payload } = action
    switch(type){
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state , 
                cartItems: addCartItem(state.cartItems , payload)
            }            
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state , 
                cartItems: removeCartItem(state.cartItems , payload)
            }   
            
        case CART_ACTION_TYPES.CHANGE_CART_STATUS:
            return {
                ...state , 
                cardStatus: !state.cardStatus
            }
        default:
            return state

    }
}

