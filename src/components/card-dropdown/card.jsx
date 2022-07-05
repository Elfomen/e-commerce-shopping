import './card.scss'
import ButtonComponent from '../button-component/button'
const CardDropdown=  () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />

            <ButtonComponent>CHECKOUT</ButtonComponent>
        </div>
    )
}

export default CardDropdown