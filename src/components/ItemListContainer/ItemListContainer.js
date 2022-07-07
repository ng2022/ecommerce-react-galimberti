// Material-UI
import Box from '@mui/material/Box';

// HOOKS AND STATES
import { useState, useEffect } from 'react';

//COMPONENTS
import ItemList from '../ItemList/ItemList';

import Flicking from "@egjs/react-flicking";


const ItemListContainer = () => {

  return (
  <>
  <Flicking horizontal={true} moveType="freeScroll" bound={true} inputType={["mouse"]} interruptable={true}>
          <div className='flicking-camera'> 
            <ItemList />
          </div>
    </Flicking>
  </>
  )
}

export default ItemListContainer;