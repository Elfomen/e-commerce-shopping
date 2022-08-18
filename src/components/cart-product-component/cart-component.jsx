import { useContext } from 'react'
import './component.scss'

const CardCheckoutComponent = ({ cart_item  , handleClick , handleDeletion}) => {

    const { name, quantity, price, imageUrl } = cart_item

   


    const increaseCardItem = () => {
        handleClick(cart_item)
    }

    const decreaseCardItem = () => {
        let item = cart_item
        item.quantity = item.quantity - 2
        if(item.quantity >= -1){
            handleClick(item)
        }else{
            item.quantity = item.quantity + 2
        }
    }

    const deleteItemFromCart = () => {
        handleDeletion(cart_item)
    }

    return (
        <tr>
            <td>
                <img src={imageUrl} alt="" />
            </td>
            <td>
                {name}
            </td>
            <td>
                <div>
                    <a  onClick={decreaseCardItem}>{`<`}</a>
                    {`${quantity}`}
                    <a  onClick={increaseCardItem}>{`>`}</a>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>
                <a id='point' title='Delete item from cart' onClick={deleteItemFromCart}>X</a>
            </td>
        </tr>
    )
}

export default CardCheckoutComponent