import React from "react";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="#">
        <img
          src="./assets/images/logo.svg"
          alt="Logo that directs to Home Page"
        />
      </a>

      <nav className={styles.nav}>
        <div>Home</div>
        <div>New</div>
        <div>Popular</div>
        <div>Trending</div>
        <div>Categories</div>
      </nav>
      <button className={styles.menu}>
        <img src="/assets/images/icon-menu.svg" alt="" />
      </button>
    </header>
  );
};

export default Header;
