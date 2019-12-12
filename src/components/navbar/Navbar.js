import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ flexColumn, hover, justifyStart, toggleFunc }) => (
    <>
        <nav className={`d-flex ${justifyStart ? 'justify-content-start' : 'justify-content-center'} ${flexColumn ? 'flex-column' : ''}`}>
            <NavLink onClick={toggleFunc} to="/" exact activeClassName="o-menu-active" className={`position-relative m-3 text-dark ${hover ? 'o-hover' : ''}`}>About</NavLink>
            <NavLink onClick={toggleFunc} to="/portfolio" activeClassName="o-menu-active" className={`position-relative m-3 text-dark ${hover ? 'o-hover' : ''}`}>Portfolio</NavLink>
            <NavLink onClick={toggleFunc} to="/resume" activeClassName="o-menu-active" className={`position-relative m-3 text-dark ${hover ? 'o-hover' : ''}`}>Resume</NavLink>
            <NavLink onClick={toggleFunc} to="/contact" activeClassName="o-menu-active" className={`position-relative m-3 text-dark ${hover ? 'o-hover' : ''}`}>Contact</NavLink>
        </nav>
    </>
);

export default Navbar