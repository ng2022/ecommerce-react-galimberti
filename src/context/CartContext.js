import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    // Estado carrito    
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        console.log(cartListItems)
    }, [cartListItems])

    // Agregar producto al carrito
    const addProductToCart = (product) => {
        setCartListItems([...cartListItems, product])
        setTotalPrice(totalPrice + product.price * product.quantity)
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