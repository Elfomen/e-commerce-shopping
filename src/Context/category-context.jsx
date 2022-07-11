import { createContext, useEffect, useState } from "react";
import axios  from "../axios";


export const  CategoryContext = createContext({
    categories: [] , 
    setCategories: () => null
})

export const CategoryProvider = ({children}) => {

    const [categories , setCategories] = useState([])

    useEffect(() => {
        const setP = async () => {
            await axios.get('api/categories').then((results) => {
                setCategories(results["data"]["hydra:member"])
            })
        }
        setP()
        
    } , [])

    const value = { categories }

    return <CategoryContext.Provider value={value}>
        {children}
    </CategoryContext.Provider>
}