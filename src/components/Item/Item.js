// REACT
import { Link } from 'react-router-dom';

// CSS
import './Item.css';

 function Item ({ title, price, image, stock, id, category })  {
  
  return (
    <>
    <Link to={`/product/${id}`}>
      <div className="styleItemCard">
        <img src={image}/>
          <div className="cardlItemContent">
            <h5>{title}</h5>
            <h6>{category}</h6>
            <p>$ {price}</p>
          </div>
      </div>
    </Link>
    </>
  );
}
export default Item;