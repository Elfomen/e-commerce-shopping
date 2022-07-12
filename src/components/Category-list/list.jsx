import CategoryItem from "../category-item/category-item"
import './list.scss'
import axios from '../../axios'
import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../../Context/category-context"
const CategoryList = () => {

    const { categories } = useContext(CategoryContext)
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