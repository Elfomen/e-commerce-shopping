import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product'
import { CategoryContext } from '../../Context/category-context'
import './category.scss'

const Category = () => {

    const { category } = useParams()
    const { categories } = useContext(CategoryContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        let cat = categories.filter((cat) => cat.name == category)
        try {
            setProducts(cat[0]["products"])

        } catch (error) {

        }
        // setProducts(categories[category].products)
    }, [category, categories])
    return (
        <>
            <h2 className='title'>{category.toUpperCase()}</h2>
            <div className='category-containers'>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )
}

export default Category