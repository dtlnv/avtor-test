import React from 'react';
import Menu from '../Menu';
import Logo from '../Logo';
import './_styles.css'; 

const Layout = ({ children }) => (
    <>
        <header>
            <Logo />
            <Menu />
        </header>
        <section id="container">
            {children}
        </section>
        <footer>
            &copy; {2020}
        </footer>
    </>
);

export default Layout;