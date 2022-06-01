// Material-UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

 function Item ({ title, price, image, stock })  {
  
  return (
    <>
    <Card sx={{ maxWidth:500, ml:5, mr:5, mb:5 }}>
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
    </Card>
    </>
  );
}


export default Item;