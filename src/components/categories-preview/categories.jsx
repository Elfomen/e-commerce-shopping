import './categories.scss'
import CategoryPreview from '../../components/category-preview/preview'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { categorisSelectors } from '../../redux/store/categories/categories.selector'

const CategoriesPreview = () => {

    // const { categories } = useContext(CategoryContext)

    const categories = useSelector(categorisSelectors.getCategories)

    console.log(categories)

    return (
        <>
            {
                categories.map((category) => (
                    <CategoryPreview key={category.title} title={category.name} products={category.products}/>
                ))
            }
        </>




    )
}

export default CategoriesPreview