import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product'
import {categorisSelectors } from '../../redux/store/categories/categories.selector'
import './category.scss'

const Category = () => {

    const { category } = useParams()
    const products  = useSelector(categorisSelectors.getProducts(category))

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