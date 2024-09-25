
import React, { useState, useEffect } from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import './App.css'; // Import the custom CSS

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
        <Container fluid className="text-center d-flex flex-column justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="app-name">
                <strong ><h1 className="load-name"><b>SNIPPETLAB</b></h1></strong>
                
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Spinner animation="border" role="status" className="loading-spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
};

export default LoadingScreen;
