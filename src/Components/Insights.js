// Insights.js
import React from 'react';
import './Insights.css';

const Insights = () => {
  return (
    <div className="insights">
      <div className="insights-section">
        <h3>User Insights</h3>
        <ul>
          <li><span className="icon">⭐</span> What do they like?</li>
          <li><span className="icon">🚫</span> What do they dislike?</li>
          <li><span className="icon">❓</span> Top Concerns</li>
          <li><span className="icon">😊</span> Make them happy!</li>
          <li><span className="icon">🧠</span> Behaviours</li>
          <li><span className="icon">🔄</span> Biases</li>
          <li><span className="icon">⭕</span> Emotions</li>
        </ul>
      </div>
      <div className="insights-section">
        <h3>Marketing</h3>
        <ul>
          <li><span className="icon">📢</span> Promotional Ideas</li>
          <li><span className="icon">✉️</span> Message Opportunity</li>
          <li><span className="icon">⚙️</span> Better Marketing Outcomes</li>
          <li><span className="icon">📊</span> Competitive Landscape</li>
        </ul>
      </div>
      <button className="insights-button">Show Me Insights</button>
    </div>
  );
};

export default Insights;
