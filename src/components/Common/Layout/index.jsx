import React from 'react';
import Menu from '../Menu';
import Logo from '../Logo';
import { projectName } from '../../../utils/constants';
import './_styles.scss'; 

/**
 * @name Layout
 * @description Generate layout of the page
 * @param {Element} children 
 */

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
            &copy; {(new Date()).getFullYear()} {projectName} by dtelnov
        </footer>
    </>
);

export default Layout;