import React, { useState } from "react";

import './ItemCount.css';


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
        <div className="itemCountContainer">
                <button className="buttonCounter" onClick={rest} disabled={counter === 1}>-</button>
                    <h5>{stock == 0 ? 0 : counter}</h5>
                <button className="buttonCounter" onClick={add}>+</button>
        </div>
        <button className="buttonItemCount" onClick={ () => (onAdd(counter))}>Add to cart</button>
        </>
    );
}


export default ItemCount;