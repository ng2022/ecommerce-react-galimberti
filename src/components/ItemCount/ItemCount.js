import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ItemCount ({initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial);

    function add () {
        if (counter < stock) {
                setCounter(counter +1)
        }
    }

    function rest () {
            if (counter != initial) {
                setCounter(counter -1)
            }
    }

    return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={rest}>-</Button>
        <Box component="span" sx={{ p: 2, border: '1px solid'}}>
        <Typography>{stock ==0 ? 0 : counter}</Typography>
        </Box>
        <Button onClick={add}>+</Button>
        <Button onClick={onAdd = () => alert(counter)} disabled={stock <1}>Add product</Button>
    </ButtonGroup>
    );
}


export default ItemCount;