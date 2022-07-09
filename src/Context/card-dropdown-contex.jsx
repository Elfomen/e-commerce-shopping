import { createContext, useState } from "react";
import CartItem from "../components/cart-item/card";

const addCartItem = (cartItems, producttoAdd) => {

    const existingCardItem = cartItems.find(
        (cartItem) => cartItem.id === producttoAdd.id
    )

    console.log(existingCardItem)

    if (existingCardItem) {
        return cartItems.map((cartItem) => cartItem.id === producttoAdd.id ? 
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...producttoAdd, quantity: 1 }]
}

const removeCartItem = (cartItems , productToDelete) => {
    let rest = cartItems.filter((item) => item.id !== productToDelete.id)

    return rest
}


export const CardDropdownContext = createContext({
    cardStatus: false,
    setCardStatus: (status) => !status,
    cartItems: [],
    addItemToCart: () => { }
})


export const CardDropdownProvider = ({ children }) => {
    const [cardStatus, setCardStatus] = useState(false)

    const [cartItems, setCartItems] = useState([])

    const addItemToCart = ( productToAdd ) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const deleteItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems , productToRemove))
    }

    const value = { cardStatus, setCardStatus , addItemToCart  , deleteItemFromCart , cartItems}

    return <CardDropdownContext.Provider value={value}>
        {children}
    </CardDropdownContext.Provider>
}