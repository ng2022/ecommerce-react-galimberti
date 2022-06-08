// MATERIAL UI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

// COMPONENTS
import ItemCount from '../ItemCount/ItemCount';
import { producto4 } from '../utilities/productsMock';
import { useState } from 'react';

const ItemDetail = ({data}) => {
    
    const [showButton, setShowButton] = useState(false);

    return (
        <>
        <div>
            <h1>Item Detail</h1>
        </div>
        <Box sx={{ flexGrow: 1 }} mb={10}>
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
                            { !showButton ?                  
                            <Box ml={5} mr={5} mt={5}>
                                <ItemCount initial={producto4.initial} stock={producto4.stock} setShowButton={setShowButton} />
                            </Box>
                            :
                            <Box ml={5} mr={5} mt={1}>
                                <Button variant="contained" ><Link to='/cart'>Go to cart</Link></Button>    
                            </Box> }
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    )

}

export default ItemDetail;