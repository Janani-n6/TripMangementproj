// SignUpPage.js
// SignUpPage.js

import React from 'react';
import './SignUpPage.css'
import { Link } from 'react-router-dom';
const SignUpPage = ({ goToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="signup-container">
        <center>
      <h2>Sign Up</h2>
            
        </center>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Sign up form elements */}
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="username" name="email"  />

        <label htmlFor="password">Password:</label>
        <input type="password" id="username" name="password" />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="username" name="confirmPassword" />
        <Link to='/'>

        <button onClick={goToLogin}>SignUp</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;

