import { Container, Button } from '@mui/material'
import { Delete } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { CartContext } from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './Cart.css'

// FIRESTORE
import { addDoc, collection } from 'firebase/firestore'

// COMPONENTS
import Modal from '../../components/Modal/modal'
import db from '../../components/utilities/firebaseConfiguration'

const Cart = () => {
    const { cartListItems, totalPrice, removeProductFromCart, clearCart } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()
    const navigate = useNavigate()
    
    // User Data
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    // Order
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                }
            }),
        total: totalPrice
    })

    // Save Order to Firebase
    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
        clearCart()
    }

    // Submit button
    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    // Handle change
    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    // Got to home
    const completeOrder = () => {
        navigate('/')
    }

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
                            <button className='btn-delete' onClick={() => removeProductFromCart(item)}>
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
            <Button onClick={() => setShowModal(true)}>Purchase</Button>
        </div>
        <Modal title={'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
            { success ? (
                <div>
                    Orden ok {success}
                    <button onClick={completeOrder}>Aceptar</button>
                </div>
            ) : (
            <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Name and Surname" 
                        variant="outlined"
                        value={formValue.name}
                        onChange={handleChange} 
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        label="Telephone" 
                        variant="outlined"
                        value={formValue.phone}
                        onChange={handleChange} 
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        variant="outlined"
                        value={formValue.email}
                        onChange={handleChange} 
                    />
                <button type='submit'>Send</button>
            </form> )
            }
            
        </Modal>
        </ Container>
    )
}

export default Cart;