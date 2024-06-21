import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileNumber) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!mobileRegex.test(mobileNumber)) {
      errors.mobileNumber = 'Enter a valid mobile number';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful form submission
      alert('Form submitted successfully');
    }
  };

  const handleCreateAccountClick = () => {
    navigate('/create-account');
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="logo">X<span>periento</span></h1>
        <p className="tagline">New Insights almost every day!</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="mobileNumber">Your Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <button onClick={handleCreateAccountClick} className="create-account">Create Account</button>
      </div>
    </div>
  );
};

export default SignIn;
