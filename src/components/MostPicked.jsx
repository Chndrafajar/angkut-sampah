import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';

export default function MostPicked() {
  return (
    <div className="most-picked">
      <div className="container">
        <div className="row">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>Most Picked</h4>
            <NavLink to="/product">
              Explore Product <FaAngleRight />{' '}
            </NavLink>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="card">
              <img src="/images/pic1.png" alt="" />
              <div className="price">$40</div>
              <div className="overlay">
                <div className="title">
                  <h4>Wooden Chair</h4>
                  <span>Jono Creative</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="items-most-picked">
              <NavLink to="/detail/:1" className="card">
                <img src="/images/pic2.png" alt="" />
                <div className="price">$40</div>
                <div className="overlay">
                  <div className="title">
                    <h4>Cuttomg Board</h4>
                    <span>Arek Creative</span>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/detail/:1" className="card">
                <img src="/images/pic3.png" alt="" />
                <div className="price">$40</div>
                <div className="overlay">
                  <div className="title">
                    <h4>Wood Cupboard</h4>
                    <span>Sipaling Creative</span>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/detail/:1" className="card">
                <img src="/images/pic4.png" alt="" />
                <div className="price">$40</div>
                <div className="overlay">
                  <div className="title">
                    <h4>Wooden Table</h4>
                    <span>Craft Creative</span>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/detail/:1" className="card">
                <img src="/images/pic5.png" alt="" />
                <div className="price">$40</div>
                <div className="overlay">
                  <div className="title">
                    <h4>Wooden House</h4>
                    <span>Ipul Creative</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
