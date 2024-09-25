import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
        <nav className="navbar">
          <div className="logo"><Link to='/' style={{textDecoration: "none", color: "gold", fontSize: "28px"}}>Watch Movies </Link></div>
          <ul className="nav-links">
            <li><Link to="/movies/popular">Popular</Link></li>
            <li><Link to="/movies/top_rated">Top Rated</Link></li>
            <li><Link to="/movies/upcoming">Upcoming</Link></li>
          </ul>
          <form className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </nav>
      </header>
    )
}

export default Header; 