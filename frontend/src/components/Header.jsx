import React from "react";

import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.headerSection} style={{backgroundImage: `linear-gradient(to right, #363636, #1A1919)` }}>
        <HeaderTop />
        <Navbar />
    </header>
  );
};

export default Header;
