// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/insights');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <p>Make Your Food & Beverage Business better with <span className="highlight">Xperiento</span> insights updated almost daily!</p>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Sidebar;
