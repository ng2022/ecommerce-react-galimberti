import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    // Estado carrito    
    const [cartListItems, setCartListItems] = useState([])

    useEffect(() => {
        console.log(cartListItems)
    }, [cartListItems])

    // Agregar producto al carrito
    const addProductToCart = (product) => {
        setCartListItems([...cartListItems, product])
    }

    // Verificar si el producto está en el carrito
    const isProductInCart = (id) => {
        return cartListItems.some(prod => prod.id === id)
    }
    
    // Eliminar producto del carrito
    const removeProductFromCart = (id) => {
        const auxCart = cartListItems.filter(prod => prod.id !== id)
        setCartListItems(auxCart)
    }
    
    // Limpiar carrito
    const clearCart = () => {
        setCartListItems([])
    }

    const values = {
        cartListItems,
        setCartListItems,
        addProductToCart,
        isProductInCart,
        removeProductFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export { CartContext };