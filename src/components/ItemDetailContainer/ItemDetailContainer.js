import ItemDetail from "../ItemDetail/ItemDetail";
import { producto4 } from "../utilities/productsMock";

// HOOKS AND PROMISES
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto4);
            }, 2000);
        });
    }

    useEffect(() => {
        getItem()
         .then ( (res) => {
            console.log(res);
         setProduct(res);   
        })
    }, [])


    return (
        <>
        <div>
            <h1>Item Detail Container</h1>
        </div>
        <ItemDetail data={product}/>
        
        </>
    )
}

export default ItemDetailContainer;