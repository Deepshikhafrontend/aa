// src/Components/InsightsDashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './InsightsDashboard.css';

const InsightsDashboard = () => {
  const [insights, setInsights] = useState([]);
  const [visibleInsights, setVisibleInsights] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3000/api/sales-insights')
      .then(response => response.json())
      .then(data => setInsights(data));
  }, []);

  const salesCount = insights.filter(insight => insight.insightCategory === 'Sales').length;

  return (
    <div className="container my-5">
      <header className="header">
        <h1>Xperien<span className="highlight">t</span></h1>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <div className="text-center mb-4">
        <p className="lead">SMART INSIGHTS TO</p>
        <h2>Transform Your Business</h2>
        <div className="icons">
          <i className="fas fa-utensils"></i>
          <i className="fas fa-smile"></i>
        </div>
      </div>
      <div className="row text-center mb-4">
        <div className="col-6 col-md-4 mb-3">
          <div className="card insight-card bg-dark text-white">
            <div className="card-body">
              <h3>12</h3>
              <p>Marketing Insights</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 mb-3">
          <div className="card insight-card bg-dark text-white">
            <div className="card-body">
              <h3>08</h3>
              <p>Behavior Insights</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 mb-3">
          <div className="card insight-card bg-dark text-white">
            <div className="card-body">
              <h3>{salesCount}</h3>
              <p>Sales Insights</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mb-4">
        <div className="col-6 col-md-6 mb-3">
          <div className="card insight-card bg-light text-dark">
            <div className="card-body">
              <h3>08</h3>
              <p>TO-DO Insights</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 mb-3">
          <div className="card insight-card bg-light text-dark">
            <div className="card-body">
              <h3>12</h3>
              <p>Liked Insights</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mb-4">
        <h3>LATEST INSIGHTS</h3>
        {insights.slice(0, visibleInsights).map((insight, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card insight-post-card">
              <div className="card-body">
                <img src="/mnt/data/image.png" alt="Insight" className="img-fluid mb-3" />
                <h5 className="card-title">{insight.insightTitle}</h5>
                <p className="card-text">{insight.insightDescription}</p>
                <p><strong>Action:</strong> {insight.insightActionItem}</p>
                <p><strong>For example:</strong> {insight.actionItemExample}</p>
                <div className="feedback-icons">
                  <i className="fas fa-thumbs-up me-2"></i> {insight.feedbackLikes}
                  <i className="fas fa-thumbs-down me-2"></i> {insight.feedbackDislikes}
                  <i className="fas fa-bookmark"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleInsights < insights.length && (
        <div className="text-center my-4">
          <Link to="/all-insights" className="btn btn-warning">Show More...</Link>
        </div>
      )}
    </div>
  );
}

export default InsightsDashboard;
