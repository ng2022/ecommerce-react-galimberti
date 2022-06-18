import { Container, Button } from '@mui/material'
import { Delete } from '@mui/icons-material';
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { cartListItems, totalPrice, removeProductFromCart } = useContext(CartContext)
    
    return (
        <Container className='container-general'> 
        <h1>Checkout: </h1>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartListItems.map( (item) => {
                const {id, title, image, price, quantity} = item
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='cart-table__content-img'>
                            <img src={image} />
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>{quantity} </p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete'>
                                <Delete />
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <Button className='btn-custom'><Link to='/'>Continue shopping</ Link></Button>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
        </ Container>
    )
}

export default Cart;