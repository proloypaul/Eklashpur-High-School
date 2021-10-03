import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container m-5">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">EklashpurHighSchool</h1>
                <nav className="nav-link">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/searvices">Teachers Searvices</NavLink>
                    <NavLink to="/classes">Classes</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;