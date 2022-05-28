
// MATERIAL UI
import Grid from '@mui/material/Grid'

// COMPONENTS
import Item from '../Item/Item';


const ItemList = ({product}) => {

    return (
       <>       
            {
              product.map(({title, price, image, stock, id}) => {
                console.log('item actual : ', product)
                return (
                <Grid item md={3} key={id}>
                <Item title={title} price={price} image={image} stock={stock} id={id}/>
                </Grid>
                )
              })
            }    
       </>
    )
}

export default ItemList;