import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product'
import './preview.scss'

const CategoryPreview = ({ title, products }) => {
    console.log(products)
    return (
        <div className='category-preview-container'>
            <Link to={`/shop/${title}`} className='title-container'>
                <h2>
                    <span className='title'>{title.toUpperCase()}</span>
                </h2>
            </Link>

            <div className='preview'>
                {
                    products.filter((_, index) => index < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview