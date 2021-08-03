import React from 'react';
import logo from './logo.jpg';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const[{ basket }, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to='/'>
            <img className="header__logo" src={logo} alt="logo"/>
            </Link>
            
            <div className="header__searchbar">
                <input placeholder="search products"/>
                <button>
                    <SearchIcon/>
                </button>
            </div>
            <ul className="header__options">
                <li>SignIn</li>
                <li>Return and Orders</li>
                <Link to='/checkout'>
                <li>Cart<sup>{basket?.length}</sup></li>

                </Link>
                
            </ul>
            
        </div>
    )
}

export default Header
