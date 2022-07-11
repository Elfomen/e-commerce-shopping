import './categories.scss'
import CategoryPreview from '../../components/category-preview/preview'
import { CategoryContext } from '../../Context/category-context'
import { useContext } from 'react'

const CategoriesPreview = () => {

    const { categories } = useContext(CategoryContext)

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