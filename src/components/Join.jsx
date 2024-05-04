import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Join() {
  return (
    <div className="join">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Join with us</h4>

            <h5>Sell your craft products here and reach millions of buyers or promote your products, come be part of us.</h5>
            <NavLink>
              Start Selling Your Product <FaArrowRight />{' '}
            </NavLink>
          </div>
          <div className="col-md-6">
            <img src="/images/join.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
