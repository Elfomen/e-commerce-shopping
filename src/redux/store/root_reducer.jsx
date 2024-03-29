import { combineReducers } from 'redux'
import { cartReducers } from './cart/cart.reducer'
import { categoriesReducer } from './categories/categories.reducers'
import { userReducer } from './user/user.reducer'

export const rootReducer = combineReducers({
    user: userReducer , 
    categories: categoriesReducer , 
    cart: cartReducers
})