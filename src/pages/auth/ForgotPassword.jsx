import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ForgotPassword() {
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
            <h4>Forgot Password</h4>
            <form action="">
              <div className="mb-3">
                <input type="email" placeholder="Email" className="form-input" />
              </div>
              <div className="mb-3">
                <input type="password" placeholder="New Password" className="form-input" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
