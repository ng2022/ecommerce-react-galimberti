// COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";

// HOOKS
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// FIREBASE
import { doc, getDoc } from "firebase/firestore";

// DB
import db from "../utilities/firebaseConfiguration";
import { Title } from "@mui/icons-material";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct()
         .then ( (prod) => {
         setProduct(prod);   
        })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db,'products', id);
        const docSnaptshop = await getDoc(docRef);
        let product = docSnaptshop.data();
        product.id = docSnaptshop.id;
        return product;
    }

    return (
        <>
        <ItemDetail data={product} />
        </>
    )   
}
export default ItemDetailContainer;