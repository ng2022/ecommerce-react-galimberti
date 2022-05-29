
// MATERIAL UI
import Grid from '@mui/material/Grid'
import { CardActions } from '@mui/material';


// COMPONENTS
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';


const ItemList = ({products}) => {

    return (
       <>     
            {
              products.map(({title, price, image, stock, id, initial}) => {
                console.log('item actual: ', products)
                return (
                  <>
                  <Grid container spacing={2}>  
                  <Grid item xs={12} key={id}>  
                    <Item title={title} price={price} image={image} stock={stock} id={id}/>
                    <CardActions>
                      <ItemCount initial={initial} stock={stock}/>
                    </CardActions>
                  </Grid>
                  </Grid>
                  </>
                )
              })
            }    
        </>
    )
}

export default ItemList;