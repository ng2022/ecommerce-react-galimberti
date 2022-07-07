// Material-UI
import Box from '@mui/material/Box';

// HOOKS AND STATES
import { useState, useEffect } from 'react';

//COMPONENTS
import ItemList from '../ItemList/ItemList';

//FLICKING
import Flicking from "@egjs/react-flicking";

import './ItemListContainer.css';


const ItemListContainer = () => {

  return (
  <>
  <div className='titleItemListContainer'>
    <h4>New arrivals!</h4>
  </div>
  <Flicking horizontal={true} moveType="freeScroll" bound={true} inputType={["mouse"]} interruptable={true}>
          <div className='flicking-camera'> 
            <ItemList />
          </div>
  </Flicking>
  </>
  )
}

export default ItemListContainer;