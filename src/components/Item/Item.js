// Material-UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

 function Item ({ title, price, image, stock, id })  {
  
  return (
    <>
    <Card sx={{ minWidth:200, ml:5, mb:5 }}>
        <CardMedia
          component="img"
          height="200"
          image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stock} in sotck
          </Typography>
        </CardContent>
        <Button variant="contained" fullWidth={true} >
          <Link to={`/product/${id}`}>DETAIL</Link> 
        </Button>
    </Card>
    </>
  );
}


export default Item;