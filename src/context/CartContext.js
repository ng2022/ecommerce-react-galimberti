import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    // Estado carrito    
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
    }, [cartListItems])

    // Agregar producto al carrito
    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + product.price * product.quantity)
            localStorage.setItem('products', JSON.stringify([...cartListItems, product]))
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

   // Verificar si el producto está en el carrito
   const isProductInCart = (id) => {
    return cartListItems.some(prod => prod.id === id)
}

// Eliminar producto del carrito
const removeProductFromCart = (product) => {
    setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
}

// Limpiar carrito
const clearCart = () => {
    setTotalPrice(0)
    setCartListItems([])
}


    const values = {
        cartListItems,
        setCartListItems,
        addProductToCart,
        isProductInCart,
        removeProductFromCart,
        clearCart,
        totalPrice,
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export { CartContext };