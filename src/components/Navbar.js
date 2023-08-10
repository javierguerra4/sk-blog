import React from "react";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="header-container">
        <h1 className="header-one">Stephen King Blog</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
