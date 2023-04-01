import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
            <h2>Welcome to my React Website</h2>
            <nav className='menu'>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About Us</a>
            </nav>
        </div>
    );
};

export default Header;