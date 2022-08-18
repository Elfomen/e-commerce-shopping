import { CATEGORY_CONSTANTS } from "./categories.type"


const INITIAL_STATE = {
    categories : []
}



export const categoriesReducer = (state = INITIAL_STATE , action = {}) => {
    const { type , payload } = action

    switch(type){
        case CATEGORY_CONSTANTS.SET_CATEGORIES:
            return {
                ...state ,
                categories: payload
            }
        default:
            return state
    }
}