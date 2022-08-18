import './card.scss'
import ButtonComponent from '../button-component/button'
import CartItem from '../cart-item/card'
import { useContext } from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector } from '../../redux/store/cart/cart.selector'
import { changeCartStatus } from '../../redux/store/cart/cart.actions'
const CardDropdown=  () => {

    // const { cartItems , cardStatus , setCardStatus } = useContext(CardDropdownContext)

    const cartItems = useSelector(cartSelector.getCartItems)

    const dispatch = useDispatch()

    const handleStatusAfterClick = () => {
        // setCardStatus()
        dispatch(changeCartStatus())
    }


    return (
        <div className='cart-dropdown-container'>
            {/* <span className='empty-message'>{cartItems? Your cart is empty}</span> */}
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>

            <Link to='/cart-item' className='to_cart_item' onClick={handleStatusAfterClick}>
                <ButtonComponent>CHECKOUT</ButtonComponent>
            </Link>
        </div>
    )
}

export default CardDropdown