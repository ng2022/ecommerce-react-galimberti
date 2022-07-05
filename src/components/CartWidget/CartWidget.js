// STYLES
import './CartWidget.css';

// MATERIAL UI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Delete from '@mui/icons-material/Delete';

// HOOKS
import * as React from 'react';
import { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'

//IMAGES
import cartIcon from '../../assets/icons/shopping-cart.png';

function CartWidget () {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { cartListItems, removeProductFromCart } = useContext(CartContext)

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className='titleCartWidget'>Your Cart</div>
        <Container className='container-general'> 
            {cartListItems.map( (item) => {
                const {id, title, image, price, quantity} = item
                return(
                    <div className='cartWidgetTableContent' key={id}>
                        <div className='cartWidgetTableContentImg'>
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
            <div className='containerButtonCartWidget'>
            <Link className='buttonCartWidgetContinue' to='/'>Continue shopping</ Link> 
            <Link className='buttonCartWidget' to='/cart'>Go to cart</ Link>
            </div>      
        </ Container>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <img src={cartIcon} alt="cart" width="50%" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}


export default CartWidget;