
// COMPONENTS
import Item from '../Item/Item';


const ItemList = ({products}) => {

    return (
       <>
            {
              products.map(({title, price, image, stock, id}) => {
                return (
                <Item title={title} price={price} image={image} stock={stock} id={id}/>
                )
              })
            }
       </>
    )
}

export default ItemList;