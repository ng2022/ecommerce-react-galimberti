// COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";

// HOOKS
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// FIREBASE
import { doc, getDoc } from "firebase/firestore";

// DB
import db from "../utilities/firebaseConfiguration";

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
        getProduct()
         .then ( (prod) => {
            console.log(prod);
         setProduct(prod);   
        })
/*         if (productFilter === undefined) {
            navigate("/not-found");
        } else {
        setProduct(productFilter);
        } */

    }, [id])

    const getProduct = async () => {
        const docRef = doc(db,'products', id);
        const docSnaptshop = await getDoc(docRef);
        let product = docSnaptshop.data();
        product.id = docSnaptshop.id;
        return product;
    }

/*      const productFilter = products.find ( (product) => {
        return product.id == id
     }) */


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