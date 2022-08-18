import CategoryItem from "../category-item/category-item"
import './list.scss'
import { useSelector } from "react-redux"
import { categorisSelectors } from "../../redux/store/categories/categories.selector"
const CategoryList = () => {

    const categories = useSelector(categorisSelectors.getCategories)


    return (
        <div className='categories-container'>
            {
                !categories&&<h1>Your list is empty</h1>
            }
            {categories&&categories.map((category , i) => {
                return <CategoryItem category={category} title={category.name} />
            })
            
            }
        </div>
    )
}

export default CategoryList