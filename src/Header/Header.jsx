import React from "react";

const Header = () => {
  return (
    <header>
      <img
        src="./assets/images/logo.svg"
        alt="Logo that directs to Home Page"
      />
      <nav>
        <div>Home</div>
        <div>New</div>
        <div>Popular</div>
        <div>Trending</div>
        <div>Categories</div>
      </nav>
    </header>
  );
};

export default Header;
