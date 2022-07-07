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

const categories = ['man', 'women']

    return (
    <nav>
        <ul>
            <li>
                <Link to="/"><img src={logo} alt="logo" width="50px" /></Link>
            </li>   
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products/man">Man</Link>
            </li>
            <li>
                <Link to="/products/women">Women</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <CartWidget />
            </li>
        </ul>
    </nav>
    );
}

export default NavBar;