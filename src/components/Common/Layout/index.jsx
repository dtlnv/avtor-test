import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import { PROJECT_NAME } from "../../../utils/constants";
import "./_styles.scss";

/**
 * @name Layout
 * @description Generate layout of the page
 * @param {any} children
 */
const Layout = ({ children }) => (
  <>
    <header>
      <Logo />
      <Menu />
    </header>
    <section id="container">{children}</section>
    <footer>
      &copy; {new Date().getFullYear()} {PROJECT_NAME} by dtelnov
    </footer>
  </>
);

export default Layout;
