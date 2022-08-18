import { createSelector } from "reselect"

const getCart = (state) => state.cart


export const cartSelector = {
    getCartStatus: createSelector(
        [getCart] , 
        (cart) => cart.cardStatus
    ) ,
      
    getCartItems: createSelector(
        [getCart] , 
        (cart) => cart.cartItems
    ) 
    
}