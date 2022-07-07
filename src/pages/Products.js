// Material-UI
import Box from '@mui/material/Box';

// HOOKS AND STATES
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//COMPONENTS
/* import products from '../components/utilities/productsMock'; */
import ItemList from '../components/ItemList/ItemList';


const ProductsPage = () => {
  
    return (
        <>
        <Box sx={{  display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',              
                    alignItems: 'center',
                    mt:5,
                    mr:5,
                    bgcolor: 'background.paper',
            }}>
            <ItemList />
        </Box>
      </>
    );
    }

    export default ProductsPage;