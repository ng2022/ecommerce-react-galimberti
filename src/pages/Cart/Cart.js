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
        <h3>Checkout:</h3>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h5>Product</h5>
                <h5>Description</h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Delete</h5>
            </div>
            {cartListItems.map( (item) => {
                const {id, title, image, price, quantity} = item
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='cart-table__content-img'>
                            <img src={image} />
                        </div>
                        <div className='cart-table__content-title'>
                            <h6>{title}</h6>
                        </div>
                        <div className='cart-table__content-price'>
                            <h6>$ {price}</h6>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <h6>{quantity} </h6>
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
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <h5>Subtotal:</h5>
                        <h5>$ {totalPrice}</h5>
                    </div>
                    <div className='cart-checkout__subtotal'>
                        <h5>Total:</h5>
                        <h5>$ {totalPrice}</h5>
                    </div>
                </div>
            </div>
            <div className='containerButtonCartWidget'>
            <Link className='buttonCartWidgetContinue' to='/'>Continue shopping</ Link> 
            <Link onClick={() => setShowModal(true)} className='buttonCartWidget' to='/cart'>Purchase</ Link>
            </div>
        </div>
        <Modal title={'Contact Form'} open={showModal} handleClose={() => setShowModal(false)}>
            { success ? (
                <div className="form-contact">
                    <h5>The order was successful!</h5>
                    <div>
                        <h5>Order number:</h5>
                        <h6>{success}</h6>
                    </div>
                    <button className='buttonCartWidgetContinue' onClick={completeOrder}>Continue to shopping</button>
                </div>
            ) : (
            <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField 
                        fullWidth
                        margin="dense"
                        id="outlined-basic" 
                        name="name"
                        label="Name and Surname" 
                        variant="outlined"
                        defaultValue="Normal"

                        value={formValue.name}
                        onChange={handleChange} 
                    />
                    <TextField
                        fullWidth
                        margin='dense' 
                        id="outlined-basic" 
                        name="phone"
                        label="Telephone" 
                        variant="outlined"
                        value={formValue.phone}
                        onChange={handleChange} 
                    />
                    <TextField 
                        fullWidth
                        margin='dense'
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        variant="outlined"
                        value={formValue.email}
                        onChange={handleChange} 
                    />
                <button className='buttonCartWidget' type='submit'>Purchase</button>
            </form> )
            }
            
        </Modal>
        </ Container>
    )
}

export default Cart;