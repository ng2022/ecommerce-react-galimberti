import { Link } from "react-router-dom";

// COMPONENTS
import ItemCount from '../ItemCount/ItemCount';

// STATES
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//CSS
import './ItemDetail.css';

const ItemDetail = ({ data }) => {

    const { addProductToCart, isProductInCart, removeProductFromCart } = useContext(CartContext);

    const senItemToCart = (qty) => {
        addProductToCart({...data, quantity: qty});
    }

    return (
        <>
            <div className='containerItemDetail'>
                <div className='thumbnailItemDetail'>
                    <img src={data.image} alt={data.name} />
                </div>
                <div className='imageItemDetail'>
                    <img src={data.image} alt={data.name} />
                </div>
                <div className='infoItemDetail'>
                    <p>{data.category}</p>
                    <h3>{data.title}</h3>
                    <h5>{data.description}</h5>
                    <p className="priceStyle">$ {data.price}</p>
                    <div className="itemCountStyle">
                    {isProductInCart(data.id) ? <Link className='buttonsItemDetail' onClick={() => {removeProductFromCart(data.id)}} to='/cart'>Go to cart</ Link> : <ItemCount stock={data.stock} onAdd={senItemToCart} />}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetail;