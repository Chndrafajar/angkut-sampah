import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span>Send me tips, trends, freebies, updates & offers.</span>
              <div className="input-message">
                <input type="text" placeholder="Message" />
                <button>Send</button>
              </div>
            </div>
            <div className="col-md-2">
              <h5>CATEGORIES</h5>
              <ul>
                <li>
                  <NavLink>Table</NavLink>
                </li>
                <li>
                  <NavLink>Chair</NavLink>
                </li>
                <li>
                  <NavLink>Cupboard</NavLink>
                </li>
                <li>
                  <NavLink>Other</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>COMPANY</h5>
              <ul>
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>Brand</NavLink>
                </li>
                <li>
                  <NavLink>Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>RESOURCE</h5>
              <ul>
                <li>
                  <NavLink>Lets Start Selling</NavLink>
                </li>
                <li>
                  <NavLink>Join</NavLink>
                </li>
                <li>
                  <NavLink>Premium</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>GUIDES</h5>
              <ul>
                <li>
                  <NavLink>Help Center</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
                <li>
                  <NavLink>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom">
        <div className="container">
          <div className="items">
            <h5>Copyright © 2023 AngkutSampah. All rights reserved.</h5>
            <div className="icons">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
              <FaPinterest />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
