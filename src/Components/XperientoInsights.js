import React from 'react';
import './XperientoInsights.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const XperientoInsights = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4"><span className="highlight">X</span>periento Insights</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Sales</div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li><i className="icon icon-opportunity"></i> New Opportunities</li>
                <li><i className="icon icon-trending"></i> What is Trending?</li>
                <li><i className="icon icon-demand"></i> In Demand</li>
                <li><i className="icon icon-ticket"></i> Higher Ticket Sale</li>
                <li><i className="icon icon-retention"></i> Customer Retention</li>
                <li><i className="icon icon-repeat"></i> Repeat Purchase</li>
                <li><i className="icon icon-festival"></i> Upcoming Festival/ Event</li>
                <li><i className="icon icon-socio-cultural"></i> Socio-Cultural Events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">User Insights</div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li><i className="icon icon-like"></i> What do they like?</li>
                <li><i className="icon icon-dislike"></i> What do they dislike?</li>
                <li><i className="icon icon-concern"></i> Top Concerns</li>
                <li><i className="icon icon-happy"></i> Make them happy!</li>
                <li><i className="icon icon-behaviour"></i> Behaviours</li>
                <li><i className="icon icon-bias"></i> Biases</li>
                <li><i className="icon icon-emotion"></i> Emotions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Marketing</div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li><i className="icon icon-promo"></i> Promotional Ideas</li>
                <li><i className="icon icon-message"></i> Message Opportunity</li>
                <li><i className="icon icon-outcomes"></i> Better Marketing Outcomes</li>
                <li><i className="icon icon-competitive"></i> Competitive Landscape</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-warning insights-button">Show Me Insights</button>
      </div>
    </div>
  );
}

export default XperientoInsights;
