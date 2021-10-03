import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="border-4 border-black p-5">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">EklashpurHighSchool</h1>
                <nav>
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