import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <div>logo</div>
            <ul>
                <li><a href="/home">home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="shop">shop</a></li>
                <li><a href="login">login</a></li>
            </ul>
        </nav>
    );
};

export default Header;