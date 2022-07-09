import './product.scss'
import ButtonComponent from '../button-component/button'
import { useContext } from 'react'
import { CardDropdownContext, CardDropdownProvider } from '../../Context/card-dropdown-contex'

const ProductCard = ({product}) => {
    const { name , price , imageUrl } = product

    const { addItemToCart , cartItems } = useContext(CardDropdownContext)

    const addProduct = () => {
        addItemToCart(product)
        // console.log(product)
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <ButtonComponent buttonType='inverted' onClick={addProduct}>Add to card now</ButtonComponent>
        </div>
    )
}

export default ProductCard