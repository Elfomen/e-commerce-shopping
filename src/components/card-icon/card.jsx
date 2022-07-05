import './card.scss'
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'
const CardIcon = ({ onclick }) => {
    return (
        <div className='cart-icon-container' onClick={onclick}> 
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CardIcon