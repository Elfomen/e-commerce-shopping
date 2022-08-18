import './card.scss'
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../redux/store/cart/cart.selector'
const CardIcon = ({ onclick }) => {

    // const { cartItems } = useContext(CardDropdownContext)

    const cartItems = useSelector(cartSelector.getCartItems)

    const calculateCardTotal = () => {
        let total = 0
        cartItems.map(item => {
            total+= parseInt(item.quantity)
        })
        return total
    }

    return (
        <div className='cart-icon-container' onClick={onclick}> 
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>{calculateCardTotal()}</span>
        </div>
    )
}

export default CardIcon