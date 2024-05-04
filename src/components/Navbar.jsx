import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLock, FaShoppingBag } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';

export default function Navbar() {
  return (
    <>
      <nav className="topbar">
        <div className="container">
          <div className="items-topbar">
            <div className="left">
              <span>Get up to 50% off new season styles </span>
            </div>
            <div className="right">
              <NavLink>Find Store</NavLink> | <span>Supportdemo@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar">
        <div className="container">
          <div className="items-navbar">
            <NavLink className="navbar-brand">
              Angkut <span>Sampah</span>
            </NavLink>
            <div className="input-search">
              <input type="text" placeholder="Search" />
              <button>Search</button>
            </div>
            <div className="info-navbar">
              <a>Log In</a>
              <button>Sign Up</button> <div className="bar"></div> <img src="/images/heart.svg" alt="" /> <img src="/images/bag-happy.svg" alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
