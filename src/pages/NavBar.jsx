// src/pages/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom"; // if you’re using react-router
import "./NavBar.css";

const NavBar = () => (
  <header className="site-header">
    <div className="logo">
      <Link to="/">
        <img src="/lgm_logo.png" alt="Church Logo" />
      </Link>
    </div>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item dropdown">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about/our_story" className="dropdown-item">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/about/sunday_service" className="dropdown-item">
                Sunday Service
              </Link>
            </li>
            <li>
              <Link to="/about/mission" className="dropdown-item">
                Mission &amp; Vision
              </Link>
            </li>
            <li>
              <Link to="/about/team" className="dropdown-item">
                Our Team
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link to="/ministries" className="nav-link">
            Ministries
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/ministries/childrens" className="dropdown-item">
                Children's
              </Link>
            </li>
            <li>
              <Link to="/ministries/youth_group" className="dropdown-item">
                Youth Group
              </Link>
            </li>
            <li>
              <Link to="/ministries/campus" className="dropdown-item">
                Campus
              </Link>
            </li>
            <li>
              <Link to="/ministries/post_grad" className="dropdown-item">
                Post-Grad
              </Link>
            </li>
            <li>
              <Link to="/ministries/adult_family" className="dropdown-item">
                Adult / Family
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/sermons" className="nav-link">
            Sermons
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/bulletin" className="nav-link">
            Bulletin
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-link donate">
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
