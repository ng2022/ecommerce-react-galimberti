// Material-UI
import Box from '@mui/material/Box';

// HOOKS AND STATES
import { useState, useEffect } from 'react';

//COMPONENTS
/* import products from '../utilities/productsMock'; */
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

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
        <ItemList />
    </Box>
  );
}

export default ItemListContainer;