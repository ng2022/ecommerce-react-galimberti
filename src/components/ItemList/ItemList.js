
// MATERIAL UI


// COMPONENTS
import Item from '../Item/Item';


const ItemList = ({products}) => {

    return (
       <>     
            {
              products.map(({title, price, image, stock, id, initial}) => {
                return (
                        <Item 
                          title={title}
                          price={price}
                          image={image}
                          stock={stock}
                          id={id}
                          initial={initial}
                        />
                )
              })
            }    
        </>
    )
}

export default ItemList;