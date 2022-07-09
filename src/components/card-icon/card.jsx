import './card.scss'
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CardDropdownContext } from '../../Context/card-dropdown-contex'
const CardIcon = ({ onclick }) => {

    const { cartItems } = useContext(CardDropdownContext)

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