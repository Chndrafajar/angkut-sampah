import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="topbar-auth">
        <NavLink to="/">
          Angkut <span>Sampah</span>
        </NavLink>
      </div>
      <div className="auth">
        <div className="items">
          <div className="card">
            <h4>Login Pages</h4>
            <form action="">
              <div className="mb-3">
                <input type="email" placeholder="Email" className="form-input" />
              </div>
              <div className="mb-3">
                <input type="password" placeholder="Password" className="form-input" />
              </div>

              <div className="mb-3">
                <NavLink to="/forgot-password" style={{ color: '#00af91', fontWeight: '500', textDecoration: 'none' }}>
                  Forgot Password?
                </NavLink>
              </div>
              <button>Login</button>
              <h6>
                Don't have account yet? <NavLink to="/register">Sign Up!</NavLink>
              </h6>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
