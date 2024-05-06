import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { product } from '../assets/data';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export default function ProductPages() {
  return (
    <>
      <Navbar />
      <div className="product-pages">
        <div className="container">
          <div className="row">
            <div className="filter-category">
              <select>
                <option value="">Select Categories</option>
                <option value="">Table</option>
                <option value="">Chair</option>
                <option value="">Cupboard</option>
                <option value="">Other</option>
              </select>
            </div>
          </div>
          <div className="row mt-4">
            {product.map((p) => (
              <div className="col-md-4 col-xl-3 col-sm-6 mb-4" key={p.id}>
                <NavLink to="/detail/:1" style={{ color: 'inherit', textDecoration: 'none' }} className="card">
                  <img src={p.img} alt="" />
                  <div className="info-icons">
                    <div className="icons">
                      <img src="/images/heart.svg" alt="" />
                    </div>
                    <div className="icons">
                      <img src="/images/bag-happy.svg" alt="" />
                    </div>
                  </div>
                  <div className="desc">
                    <span>{p.user}</span>
                    <h5>{p.title}</h5>
                    <div className="price">${p.price}</div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          <div className="row mt-4">
            <div className="pagination">
              <div className="left">
                <FaAngleLeft />
              </div>
              <div className="items">1</div>
              <div className="items">2</div>
              <div className="items active">3</div>
              <div className="items">4</div>
              <div className="right">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
