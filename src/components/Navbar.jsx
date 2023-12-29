import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
    return (
        <nav className='mx-auto	font-semibold bg-slate-950 text-white py-5 flex justify-center '>
            <NavLink to="/" className='mr-32'>Home</NavLink>
            <NavLink to="/category" className='mr-32'>Category Details</NavLink>
        </nav>
    );
};

export default Navbar;
