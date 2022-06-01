import { Link } from "react-router-dom";

//STYLES
import "./NavBar.css";

// COMPONENTS
import CartWidget from '../CartWidget/CartWidget';

//IMAGES
import logo from '../../assets/icons/logo-ecommerce.png';

const NavBar = () => {
    return (
    <nav className="Menu">
        <ul>
            <Link to="/">
                <li>
                    <img src={logo} alt="logo" width="50px" />
                </li>
            </Link>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/products">
                <li>Products</li>
            </Link>    
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
            <Link to="/cart">
                <li><CartWidget /></li>
            </Link>
        </ul>
    </nav>
    );
}

export default NavBar;