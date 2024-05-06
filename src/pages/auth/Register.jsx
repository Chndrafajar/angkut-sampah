import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Register() {
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
            <h4>Register Pages</h4>
            <form action="">
              <div className="mb-3" style={{ display: 'flex', gap: '15px' }}>
                <input type="text" placeholder="First Name" className="form-input" />
                <input type="text" placeholder="Lasr Name" className="form-input" />
              </div>
              <div className="mb-3">
                <input type="email" placeholder="Email" className="form-input" />
              </div>
              <div className="mb-3">
                <input type="password" placeholder="Password" className="form-input" />
              </div>
              <button>Login</button>
              <h6>
                Have an account? <NavLink to="/login">Log In!</NavLink>
              </h6>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
