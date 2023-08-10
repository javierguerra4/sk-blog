import React from "react";

function Navbar() {
  return (
    <nav className="Navbar">
      <h1 className="header-one">Stephen King Blog</h1>
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
