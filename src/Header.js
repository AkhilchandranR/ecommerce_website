import React from 'react';
import logo from './logo.jpg';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <div className="header__searchbar">
                <input placeholder="search products"/>
                <button>
                    <SearchIcon/>
                </button>
            </div>
            <ul className="header__options">
                <li>SignIn</li>
                <li>Return and Orders</li>
                <li>Cart</li>
            </ul>
            
        </div>
    )
}

export default Header
