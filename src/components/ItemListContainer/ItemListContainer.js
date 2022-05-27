// Material-UI
import Card from '@mui/material/Card';

// HOOKS AND STATES
import { useState, useEffect } from 'react';

//COMPONENTS
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({}) => {

  const [items, setItems] = useState([])
      
  const products = [
    {
      title: 'Product 1',
      price: '$1.99',
      image: 'https://source.unsplash.com/random/400x400',
      stock: 10,
      id: 1,
    },
    {
      title: 'Product 2',
      price: '$2.99',
      image: 'https://source.unsplash.com/random/400x400',
      stock:  5,
      id: 2,
    },
    {
      title: 'Product 3',
      price: '$3.99',
      image: 'https://source.unsplash.com/random/400x400',
      stock: 3,
      id: 3,
    },
  ]
  
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
          setItems (res)
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