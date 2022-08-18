import { CATEGORY_CONSTANTS } from "./categories.type"

export const setCategories = (data) => {
    return {type: CATEGORY_CONSTANTS.SET_CATEGORIES , payload: data}
}