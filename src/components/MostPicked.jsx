import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MostPicked() {
  return (
    <div className="most-picked">
      <div className="container">
        <div className="row">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>Most Picked</h4>
            <NavLink>Explore Product</NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
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
          <div className="col-xl-4">
            <div className="card">
              <img src="/images/pic2.png" alt="" />
              <div className="price">$40</div>
              <div className="overlay">
                <div className="title">
                  <h4>Wooden Chair</h4>
                  <span>Jono Creative</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <img src="/images/pic3.png" alt="" />
              <div className="price">$40</div>
              <div className="overlay">
                <div className="title">
                  <h4>Wooden Chair</h4>
                  <span>Jono Creative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
