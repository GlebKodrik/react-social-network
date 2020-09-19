import React from 'react';
import logo from '@img/google.png';
import h from './Header.module.css';

const Header = () => {
    return <header className={h.header}>
        <img src={logo} alt="Логотип" />
    </header>
}

export default Header;