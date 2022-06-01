// Material-UI
import Box from '@mui/material/Box';

// HOOKS AND STATES
import { useState, useEffect } from 'react';

//COMPONENTS
import products from '../utilities/productsMock';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 4000);
    })
  }

  useEffect ( () => {
    getProducts()
      .then( (res) => {
        //console.log(res)
          setItems(res)
    })
      .catch( (err) => {
        //console.log("Failed call!")
    })
      .finally( () => {
        //console.log("Finally!")
    })
  }, [])

  return (
    <Box sx={{  display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'flex-start',              
                alignItems: 'center',
                mt:5,
                mr:5,
                bgcolor: 'background.paper',
      }}>
        <ItemList products={products}/>
    </Box>
  );
}

export default ItemListContainer;