import categories from "../../constants/categories-data"
import CategoryItem from "../category-item/category-item"
import './list.scss'

const CategoryList = () => {
    return (
        <div className='categories-container'>
            {categories.map((category) => {
                return <CategoryItem category={category} />
            })}
        </div>
    )
}

export default CategoryList