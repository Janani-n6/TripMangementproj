// SignUpPage.js

import React from 'react';
import './SignUpPage.css'; // Import your CSS file

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
