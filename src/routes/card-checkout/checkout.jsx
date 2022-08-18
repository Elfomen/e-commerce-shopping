import { useContext } from "react"
import { Link } from "react-router-dom"
import ButtonComponent from "../../components/button-component/button"
import CardCheckoutComponent from "../../components/cart-product-component/cart-component"
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector } from '../../redux/store/cart/cart.selector'
import './checkout.scss'
import { addItemToCart, removeItemFromCart } from '../../redux/store/cart/cart.actions'
const Checkout = () => {

    const cartItems = useSelector(cartSelector.getCartItems)

    const dispatch = useDispatch()

    const addCartItem = (item) => {
        dispatch(addItemToCart(item))

    }

    const deleteItemFromCart = (item) => {
        dispatch(removeItemFromCart(item))
    }

    const calculateTotal = () => {
        let total = 0
        cartItems.map(item => {
            total = total + (item.quantity * item.price)
        })

        return total
    }
    return (
        <div>
            <div className="table-container">
                <table>
                    <thead>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </thead>
                    <tbody>
                        {cartItems.length > 0 ? cartItems.map(item => {
                            return <CardCheckoutComponent cart_item={item} handleClick={() =>  addCartItem(item)} handleDeletion={() => deleteItemFromCart(item)} />
                        }) : <h2 className="empty-card">Your card is empty</h2>}

                        <tr id="total_row">
                            <td>
                                <Link to={`/cart-checkout`}>
                                    <ButtonComponent>PROCEED TO CHECKOUT</ButtonComponent>

                                </Link>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div>
                                    <h3>Total</h3>
                                    <span>{calculateTotal()} FCFA</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>

    )
}


export default Checkout