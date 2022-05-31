// Material-UI
import Card from '@mui/material/Card';

// HOOKS AND STATES
import { useState, useEffect } from 'react';

//COMPONENTS
import ItemList from '../ItemList/ItemList';
import products from '../utilities/productsMock';

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
    <Card sx={{ maxWidth: 345 }}>
      <ItemList products={products}/>
    </Card>
  );
}

export default ItemListContainer;