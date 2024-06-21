import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Xperiento</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="ml-auto"></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center my-4">
        <h2>SMART INSIGHTS TO</h2>
        <h1>Transform Your Business</h1>
      </Container>
      <Container className="text-center my-4">
        <Row className="justify-content-center">
          <Col xs="auto">
            <span className="icon">🍽️</span>
          </Col>
          <Col xs="auto">
            <span className="icon">😊</span>
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="text-white bg-dark text-center">
              <Card.Body>
                <Card.Title>12</Card.Title>
                <Card.Text>Marketing Insights</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="text-white bg-dark text-center">
              <Card.Body>
                <Card.Title>08</Card.Title>
                <Card.Text>Behavioral Insights</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="text-white bg-dark text-center">
              <Card.Body>
                <Card.Title>08</Card.Title>
                <Card.Text>TO-DO Insights</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="text-white bg-dark text-center">
              <Card.Body>
                <Card.Title>12</Card.Title>
                <Card.Text>Liked Insights</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
