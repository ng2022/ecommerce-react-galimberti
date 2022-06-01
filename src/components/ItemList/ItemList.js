
// MATERIAL UI


// COMPONENTS
import Item from '../Item/Item';


const ItemList = ({products}) => {

    return (
       <>     
            {
              products.map(({title, price, image, stock, id, initial}) => {
                console.log('item actual: ', products)
                return (
                        <Item title={title} price={price} image={image} stock={stock} id={id} />
              )
              })
            }    
        </>
    )
}

export default ItemList;