import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories


export const categoriesSelectors = createSelector(
    [selectCategoryReducer] , 
    (categories) => categories.categories
)

export const categorisSelectors = {
    getCategories: createSelector(
        [categoriesSelectors] , 
        (categories) => categories
    ) ,

    getProducts: (category) =>  createSelector(
        [categoriesSelectors] ,
        (categories) => categories.filter((cat) => cat.name == category)[0]["products"]
    )
    // (state) => state.categories.categories
}
