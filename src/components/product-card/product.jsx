import './product.scss'
import ButtonComponent from '../button-component/button'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../redux/store/cart/cart.actions'
import { cartSelector } from '../../redux/store/cart/cart.selector'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, quantity } = product

    // const { addItemToCart , cartItems } = useContext(CardDropdownContext)


    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(addItemToCart(product))
    }

    if (quantity > 0) {
        return (
            <div className='product-card-container'>
                <img src={imageUrl} alt={`${name}`} />
                <div className='footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>${price}</span>
                </div>

                <ButtonComponent buttonType='inverted' onClick={() => addProduct()}>Add to card</ButtonComponent>
            </div>
        )
    } else {
        return (
            <div className='product-card-container'>
                <img src={imageUrl} alt={`${name}`} />
                <div className='footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>${price}</span>
                </div>

                <ButtonComponent buttonType='inverted'>Off Line</ButtonComponent>
            </div>
        )
    }


}

export default ProductCard