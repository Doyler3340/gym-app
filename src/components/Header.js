import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Doyle's Gym</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/memberships">Memberships</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;