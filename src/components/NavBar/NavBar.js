import "./NavBar.css";

//IMAGES
import logo from '../../assets/icons/logo-ecommerce.png';

const NavBar = () => {
    return (
    <nav className="Menu">
        <ul>
            <li>
                <img src={logo} alt="logo" width="50px" />
            </li>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    );
}

export default NavBar;