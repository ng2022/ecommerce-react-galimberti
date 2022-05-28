// Material-UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

import ItemCount from '../ItemCount/ItemCount';

 function Item ({ products })  {
  
  const { title, price, image, stock } = products;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stock}
          </Typography>
        </CardContent>
        <CardActions>
        <ItemCount/>
      </CardActions>
    </Card>
  );
}


export default Item;