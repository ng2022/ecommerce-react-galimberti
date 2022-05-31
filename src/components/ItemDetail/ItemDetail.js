// MATERIAL UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// COMPONENTS
import ItemCount from '../ItemCount/ItemCount';
import { producto4 } from '../utilities/productsMock';

const ItemDetail = ({data}) => {

    console.log('Data desde ItemDetail: ', data);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <>
        <div>
            <h1>Item Detail</h1>
        </div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs ml={5}>
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://source.unsplash.com/random/400x400"
                        alt="green iguana"
                    />
                </Grid>
                <Grid item xs={5}>
                <Paper elevation={6}>
                    <CardMedia
                        component="img"
                        height="600"
                        image="https://source.unsplash.com/random/400x400"
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
                                <ItemCount />
                            </Box> 
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    )

}

export default ItemDetail;