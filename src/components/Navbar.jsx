import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline, IoHomeOutline } from 'react-icons/io5';
import { LuUserCircle } from 'react-icons/lu';
import SearchModal from './SearchModal';

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
            <NavLink to="/" className="navbar-brand">
              Angkut <span>Sampah</span>
            </NavLink>
            <div className="input-search">
              <input type="text" placeholder="Search" />
              <button>Search</button>
            </div>
            <div className="info-navbar">
              <IoSearchOutline className="icon-search" data-bs-toggle="modal" data-bs-target="#searchModal" />
              <NavLink className="icons-info" to="/login">
                Log In
              </NavLink>
              <NavLink className="icons-sign" to="/register">
                <button>Sign Up</button>
              </NavLink>{' '}
              <div className="bar"></div> <img src="/images/heart.svg" alt="" /> <img src="/images/bag-happy.svg" alt="" />
            </div>
          </div>
        </div>
      </nav>
      <nav className="bottom-bar">
        <ul>
          <li>
            <NavLink to="/">
              <IoHomeOutline />
            </NavLink>
          </li>

          <li>
            <NavLink>
              <img src="/images/heart.svg" alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src="/images/bag-happy.svg" alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <LuUserCircle />
            </NavLink>
          </li>
        </ul>
      </nav>
      <SearchModal />
    </>
  );
}
