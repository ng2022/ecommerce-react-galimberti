
// MATERIAL UI

//HOOKS & STATES
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


// COMPONENTS
import Item from '../Item/Item';

// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../utilities/firebaseConfiguration';


const ItemList = ({title}) => {

  const [items, setItems] = useState([])
  const { category } = useParams()

  useEffect( () => {
    setItems([])
    console.log()
    getProducts()
    .then( (products) => {
        category ?  filterFirebase() : setItems(products)
    })
}, [category])

const getProducts = async () => {
  const productCollection = collection(db, "products")
  const productSnapshot = await getDocs(productCollection);
  const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id
      // console.log("product: ", product)
      return product
  })
  return productList
}

/*   const getProducts = async () => {
    const productSnapshot = await getDocs(collection(db, "products"));
    //console.log('productSnapshot: ', productSnapshot)
    const productsList = productSnapshot.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id
      return product
    });
  } */

  const filterFirebase = async () => {
    const productRef = collection(db, 'products')
    const queryResult = query(productRef, where("category", "==", category));
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return setItems(productList)
}

    return (
       <>     
            {
              items.map(({title, price, image, stock, id}) => {
                return (
                        <Item
                          key={id}
                          title={title}
                          price={price}
                          image={image}
                          stock={stock}
                          id={id}
                        />
                )
              })
            }    
        </>
    )
}

export default ItemList;