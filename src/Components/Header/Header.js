import userEvent from '@testing-library/user-event';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, signOutProcess} = useFirebase()
    return (
        // header section and set link to all section 
        <div className="container mx-5 my-10">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold text-navTitleTwo">Eklashpur<span className="text-navTitle">HighSchool</span></h1>
                <nav className="nav-link">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/searvices">Teachers Searvices</NavLink>
                    <NavLink to="/classes">Classes</NavLink>
                    {user.email ? <button onClick={signOutProcess}><NavLink to="/login">Sign Out</NavLink></button>: <button><NavLink to="/register">Sign Up</NavLink></button> }
                </nav>
            </div>
        </div>
    );
};

export default Header;