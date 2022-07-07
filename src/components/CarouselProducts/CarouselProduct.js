import Flicking from "@egjs/react-flicking";
import { Link } from "react-router-dom";

import './stylesCarouselProducts.css';

import ItemList from "../ItemList/ItemList";

const DemoComponent = () => {

return (
        <>
        <Flicking horizontal={true} bound={true} deceleration={0.0005}>
            <div>
                <ItemList />
            </div>
        </Flicking>
        </>
    )
}

export default DemoComponent;


/* export default class DemoComponent extends Component {
    render() {
    return <Flicking horizontal={true} bound={true} deceleration={0.0005}>
                <Link to="/cart">
                <div className="carouselItem">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="image"/>
                        <div className="carouselItemContent">
                            <h5>Product Name</h5>
                            <h6>Category</h6>
                            <p>Price</p>
                        </div>
                    </div>
                </Link>
                <div className="flicking-panel">
                    <div className="carouselItem">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="image"/>
                        <Link className='buttonCardProduct' to='/cart'>Go to cart</ Link>
                    </div>
                </div>
                <div className="flicking-panel">
                    <div className="carouselItem">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="image"/>
                        <Link className='buttonCardProduct' to='/cart'>Go to cart</ Link>
                    </div>
                </div>
                <div className="flicking-panel">
                    <div className="carouselItem">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="image"/>
                        <Link className='buttonCardProduct' to='/cart'>Go to cart</ Link>
                    </div>
                </div>
                <div className="flicking-panel">
                    <div className="carouselItem">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="image"/>
                        <Link className='buttonCardProduct' to='/cart'>Go to cart</ Link>
                    </div>
                </div>
                <div className="flicking-panel">
                    <div className="carouselItem">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="image"/>
                        <Link className='buttonCardProduct' to='/cart'>Go to cart</ Link>
                    </div>
                </div>   
    </Flicking>;
  }
} */