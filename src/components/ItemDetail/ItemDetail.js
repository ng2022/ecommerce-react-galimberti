import { Link } from "react-router-dom";

// COMPONENTS
import ItemCount from '../ItemCount/ItemCount';

// STATES
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//CSS
import './ItemDetail.css';

const ItemDetail = ({ data }) => {

    const { addProductToCart, isProductInCart, removeProductFromCart } = useContext(CartContext);

    const senItemToCart = (qty) => {
        addProductToCart({...data, quantity: qty});
    }

    return (
        <>
            <div className='containerItemDetail'>
                <div className='thumbnailItemDetail'>
                    <img src={data.image} alt={data.name} />
                </div>
                <div className='imageItemDetail'>
                    <img src={data.image} alt={data.name} />
                </div>
                <div className='infoItemDetail'>
                    <p>{data.category}</p>
                    <h3>{data.title}</h3>
                    <h5>{data.description}</h5>
                    <p className="priceStyle">$ {data.price}</p>
                    <div className="itemCountStyle">
                    {isProductInCart(data.id) ? <Link className='buttonsItemDetail' onClick={() => {removeProductFromCart(data.id)}} to='/cart'>Go to cart</ Link> : <ItemCount stock={data.stock} onAdd={senItemToCart} />}
                    </div>
                </div>
            </div>









        {/* <Box sx={{ flexGrow: 1 }} mb={10}>
            <Grid container spacing={3}>
                <Grid item xs ml={5}>
                    <CardMedia
                        component="img"
                        height="100"
                        image={data.image}
                        alt="green iguana" 
                    />
                </Grid>
                <Grid item xs={5}>
                <Paper elevation={6}>
                    <CardMedia
                        component="img"
                        height="600"
                        image={data.image}
                        alt="green iguana"
                    />
                </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Box
                        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        mr: 5,
                        width: '100%',
                        height: 600,
                        },
                        }}
                    >
                        <Paper elevation={6}>
                            <Typography variant="overline" display="block" gutterBottom mt={5} ml={5} mr={5}> 
                                <Box sx={{ color: 'text.secondary' }}>NEW PRODUCT</Box>
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" ml={5} mr={5}>{data.title}</Typography>
                            <Typography variant="h5" gutterBottom component="div" ml={5} mr={5}>
                                <Box sx={{ color: 'text.secondary' }}>{data.price}</Box>
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div" ml={5} mr={5}>{data.description}</Typography>
                            <Box ml={5} mr={5} mt={3}>
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    <Button sx={{ color: 'text.secondary' }}>Black</Button>
                                    <Button sx={{ color: 'text.secondary' }}>Blue</Button>
                                    <Button sx={{ color: 'text.secondary' }}>White Pearl</Button>
                                </ButtonGroup> 
                            </Box>                 
                            <Box ml={5} mr={5} mt={5}>
                                {isProductInCart(data.id) ? <Button variant="contained" onClick={() => {removeProductFromCart(data.id)}}><Link to='/cart'>Go to cart</ Link></Button> : <ItemCount stock={data.stock} onAdd={senItemToCart} />}
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box> */}
        </>
    )

}

export default ItemDetail;