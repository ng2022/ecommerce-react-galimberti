// Material-UI
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import ItemCount from '../ItemCount/ItemCount';


const Item = ({ products }) => {
const { title, price, image, stock, } = products;

    return (
    <>
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
        <ItemCount initial={initial} stock={stock} />
      </CardActions>

    </>
    )
}

export default Item;