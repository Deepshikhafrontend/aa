import React, { useEffect, useState } from 'react';
import './InsightsDashboard.css';

const AllInsightsPage = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/sales-insights')
      .then(response => response.json())
      .then(data => setInsights(data));
  }, []);

  return (
    <div className="container my-5">
      <header className="header">
        <h1>Xperien<span className="highlight">t</span></h1>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <div className="text-center mb-4">
        <p className="lead">ALL INSIGHTS</p>
      </div>
      <div className="row">
        {insights.map((insight, index) => (
          <div key={index} className="col-md-4 mb-3">
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
    </div>
  );
}

export default AllInsightsPage;
