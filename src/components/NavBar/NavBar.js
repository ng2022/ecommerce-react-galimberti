// MATERIAL UI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// STATES
import { useState } from 'react';

// REACT ROUTER
import { Link } from "react-router-dom";

//STYLES
import "./NavBar.css";

// COMPONENTS
import CartWidget from '../CartWidget/CartWidget';

//IMAGES
import logo from '../../assets/icons/logo-ecommerce.png';



const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = ['pants', 'shirts']

    return (
    <nav className="Menu">
        <ul>
            <li>
                <Link to="/"><img src={logo} alt="logo" width="50px" /></Link>
            </li>   
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            Products
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {categories.map( (cat) => {
                    return <MenuItem onClick={handleClose}><Link to={`/products/${cat}`}>{cat}</Link></MenuItem>
                })
                }
            </Menu>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/cart"><CartWidget /></Link>
            </li>
        </ul>
    </nav>
    );
}

export default NavBar;