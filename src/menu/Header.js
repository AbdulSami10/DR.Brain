import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";

import styles from "../styles/header.module.css";
import NavBar from "../components/NavBar";
import { heading } from "../information/content";
const Header = () => {
  const mobileNav = useRef();
  const [menu, setMenu] = useState(false);
  const menuOpen = () => {
    mobileNav.current.classList.toggle(styles.mobileNav);
    setMenu(true);
  };
  const menuClose = () => {
    mobileNav.current.classList.remove(styles.mobileNav);

    setMenu(false);
  };
  return (
    <div>
      <div className={styles.main}>
        <NavLink to={"/"} className={styles.navbarLinkHead}>
          <img src="./img/LOGO.png" alt="logo" className={styles.logo} />
          <h3 className={styles.heading}>{heading}</h3>
        </NavLink>
        {!menu ? (
          <CgMenu className={styles.menuOpen} onClick={menuOpen} />
        ) : (
          <CgClose onClick={menuClose} className={styles.menuClose} />
        )}
        <span className={styles.desktopNav}>
          <NavBar />
        </span>
      </div>
      <span ref={mobileNav}>{menu && <NavBar />}</span>
    </div>
  );
};

export default Header;
