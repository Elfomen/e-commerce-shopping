import './card.scss'
import ButtonComponent from '../button-component/button'
import CartItem from '../cart-item/card'
import { useContext } from 'react'
import { CardDropdownContext } from '../../Context/card-dropdown-contex'
import {Link} from 'react-router-dom';
const CardDropdown=  () => {

    const { cartItems , cardStatus , setCardStatus } = useContext(CardDropdownContext)

    const handleStatusAfterClick = () => {
        setCardStatus(!cardStatus)
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