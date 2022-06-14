import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ItemCount = ({stock, onAdd}) => {
    
    const [counter, setCounter] = useState(1);

    const add = () => {
        if (counter < stock) {
                setCounter(counter +1)
        }
    }

    const rest = () => {
            if (counter > 1) {
                setCounter(counter -1)
            }
    }

    return (
        <>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={rest} disabled={counter === 1}>-</Button>
                <Box component="span" sx={{ p: 2, border: '1px #1a76d2 solid'}}>
                    <Typography>{stock == 0 ? 0 : counter}</Typography>
                </Box>
                <Button onClick={add}>+</Button>
            </ButtonGroup>
            <Box mr={5} mt={1}>
                <Button variant="contained" onClick={ () => (onAdd(counter))}>Add product</Button>
            </Box>
        </>
    );
}


export default ItemCount;