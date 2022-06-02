// COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../utilities/productsMock";

// HOOKS
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});


 /*    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
    } */

    useEffect(() => {
  /*       getItem()
         .then ( (res) => {
            console.log(res);
         setProduct(res);   
        }) */
        if (productFilter === undefined) {
            navigate("/not-found");
        } else {
        setProduct(productFilter);
        }

    }, [])

     const productFilter = products.find ( (product) => {
        return product.id == id
     })


    return (
        <>
        <div>
            <h1>Item Detail Container</h1>
        </div>
        <ItemDetail data={product} />
        </>
    )   
}
export default ItemDetailContainer;