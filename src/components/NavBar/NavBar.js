// MATERIAL UI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// STATES
import { useState, useContext } from 'react';

// REACT ROUTER
import { Link } from "react-router-dom";

//STYLES
import "./NavBar.css";

// COMPONENTS
import CartWidget from '../CartWidget/CartWidget';
import ThemeSwitch from './ThemeSwitch';
import { ThemeContext } from '../../context/ThemeContext';

//IMAGES
import logo from '../../assets/icons/logo-ecommerce.png';



const NavBar = () => {

    const {darkTheme} = useContext(ThemeContext);
/*     const [anchorEl, setAnchorEl] = useState(null); */
/*     const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }; */

    const categories = ['pants', 'shirts']

    return (
    <nav className={`Menu ${darkTheme ? 'dark-mode' : ''}`}>
        <ul>
            <li>
                <Link to="/"><img src={logo} alt="logo" width="50px" /></Link>
            </li>   
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products/pants">Man</Link>
{/*                 {categories.map( (cat) => {
                    return <Link to={`/products/${cat}`}>{cat}</Link>
                })
                } */}
            </li>
            <li>
                <Link to="/products/shirts">Women</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
{/*             <li>
                <ThemeSwitch />
            </li> */}
            <li>
                <CartWidget />
            </li>
        </ul>
    </nav>
    );
}

export default NavBar;