import { useContext, useEffect } from 'react'
import ProductCard from '../../components/product-card/product'
import { ProductContext } from '../../Context/product-context'
import './shop.scss'
const Shop = () => {

    const { products } = useContext(ProductContext)

    console.log(products)

    return (
        <div className='products-container'>
            {products&&products.map((product) => {
               return  <ProductCard product={product}/>
            })}
        </div>
    )
}

export default Shop