import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../../components/button-component/button'
import CartItem from '../../components/cart-item/card'
import { CardDropdownContext } from '../../Context/card-dropdown-contex'
import './checkout.scss'

const Cart_Checkout = () => {
    const { cartItems, addItemToCart, deleteItemFromCart } = useContext(CardDropdownContext)

    const calculateCartTotal = () => {
        let sum = 0;
        cartItems.map(item => {
            sum += item.price * item.quantity
        })

        return sum
    }

    return <>
        <div >
            <div className='cart-checkout-nav'>
                <div className='cart-checkoutnav-content display-flex'>
                    <div className='navbar-logo'>
                        <img src="https://findicons.com/files/icons/566/isimple_system/128/shopping_cart.png" alt="" />
                    </div>
                    <div className='navbar-content'>
                        <h2>CHECKOUT PAGE</h2>
                    </div>
                </div>
                <div>
                    <Link to={`/cart-item`} className='return-to-checkoutpage-link'>
                        <span>Return to cart</span>
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className='cart-checkout-body display-flex'>
                    <div className='cart-cehckout-body-left'>
                        <div className='left-title'>
                            <h1>Getting your order</h1>
                            <h1>Shipping informations</h1>
                        </div>
                        <div className='inputs'>
                            <p>First Name</p>
                            <input type="text" />
                        </div>
                        <div className='inputs'>
                            <p>Last Name</p>
                            <input type="text" />
                        </div>
                        <div className='inputs'>
                            <p>Address</p>
                            <input type="text" />
                        </div>
                        <div className='inputs'>
                            <p>City</p>
                            <input type="text" />
                        </div>
                        <div className='inputs'>
                            <div>
                                <h1>Contact Information</h1>
                            </div>
                            <p>Email address</p>
                            <input type="text" />

                            <p>Phone Number</p>
                            <input type="text" />
                        </div>

                        <div className='inputs'>
                            <div>
                                <h1>Mode de livraison</h1>
                            </div>

                            <select name="" id="">
                                <option value="maison">Livraison a domicile</option>
                                <option value="maison">Agence</option>
                            </select>
                
                        </div>

                        <div className='inputs'>
                            <div>
                                <h1>Methode de Payement</h1>
                            </div>
                            <div className='display-flex'>
                                <div className='display-flex margin-left'>
                                    <input type="radio" name='payment-method' />
                                    <div>
                                        <img className='payment-icon' src="data:image/png;base64,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" alt="" />
                                        {/* <p>Orange Money</p> */}
                                    </div>


                                </div>

                                <div className='display-flex margin-left'>
                                    <input type="radio" name='payment-method' />
                                    <div>
                                        <img className='payment-icon' src="data:image/png;base64,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" alt="" />
                                        {/* <p>MTN Mobile Money</p> */}
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='cart-cehckout-body-right'>
                        <div className='container-right'>
                            {cartItems.map(item => {
                                return <CartItem cartItem={item} />
                            })}

                        </div>
                        <h1>Total: {calculateCartTotal()} FCFA</h1>
                    </div>
                </div>
            </div>
            <br /><br /><br />

        </div>
        <div className='payment-btn'>
            <ButtonComponent>
                Payer Maintenant
            </ButtonComponent>
        </div>

    </>
}


export default Cart_Checkout