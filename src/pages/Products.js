// Material-UI
import Box from '@mui/material/Box';

// HOOKS AND STATES
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//COMPONENTS
import products from '../components/utilities/productsMock';
import ItemList from '../components/ItemList/ItemList';


const ProductsPage = () => {

    const [items, setItems] = useState([])

    const { category } = useParams();

    useEffect ( () => {
        setItems([])
        getProducts()
          .then( (res) => {
            //console.log(res)
            filterByCategory(res)
        })
      }, [category])

  
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        //setTimeout(() => {
          resolve(products)
        //}, 4000);
      })
    }
  

    const filterByCategory = (array) => { 
        return array.map ( (item) => {
            if (item.category === category) {
                return setItems (items => [...items, item])
            }
        })
    }
  
    return (
        <>
        <div><h1>Pagina de productos</h1></div> 
        <Box sx={{  display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',              
                    alignItems: 'center',
                    mt:5,
                    mr:5,
                    bgcolor: 'background.paper',
            }}>
            <ItemList products={items}/>
        </Box>
      </>
    );
    }

    export default ProductsPage;