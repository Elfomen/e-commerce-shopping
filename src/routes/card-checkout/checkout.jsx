import { useContext } from "react"
import CardCheckoutComponent from "../../components/cart-product-component/cart-component"
import { CardDropdownContext } from "../../Context/card-dropdown-contex"
import './checkout.scss'
const Checkout = () => {

    const { cartItems, addItemToCart, deleteItemFromCart } = useContext(CardDropdownContext)

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
                            return <CardCheckoutComponent cart_item={item} handleClick={addItemToCart} handleDeletion={deleteItemFromCart} />
                        }) : <h2 className="empty-card">Your card is empty</h2>}
                        
                        <tr id="total_row">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div>
                                    <h3>Total</h3>
                                    <span>$ {calculateTotal()}</span>
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