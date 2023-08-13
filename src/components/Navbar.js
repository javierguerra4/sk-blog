import React from "react";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="header-container">
        <h1 className="header-one">Stephen King Blog</h1>
        <div className="links-container">
          <ul className="navbar-links">
            <li>
              <a className="no-underline" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="no-underline" href="/books">
                Books
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
