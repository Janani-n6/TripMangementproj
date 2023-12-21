// LoginPage.js
// LoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'
const LoginPage = ({ goToSignUp }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <center>

      <h2>Login</h2>
      </center>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Login form elements */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="email" name="password" required />
        <Link to='/'>
            
        <button href=''>Login</button>
        </Link>
        <br/>
        <Link to='/Sign'>
            
        <button href=''>SignUp</button>
        </Link>
        
      </form>
    </div>
  );
};

export default LoginPage;
