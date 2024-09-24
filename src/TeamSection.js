import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TeamSection = () => {
    return (
      <Container className="team-section text-center mt-5" style={{backgroundColor : 'black'}}>
        <h2>Meet Our Team</h2>
        <Row>
          <Col md={3}>
            <Card className="team-card">
              <Card.Img variant="top" src="/B.jpg" />
              <Card.Body>
                <Card.Title>BHAVADHARANI M</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="team-card">
              <Card.Img variant="top" src="/H.jpg" />
              <Card.Body>
                <Card.Title>HARISHMA D</Card.Title>
        
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="team-card">
              <Card.Img variant="top" src="/path-to-team-member2.jpg" />
              <Card.Body>
                <Card.Title>EVELYN DAVID</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default TeamSection;
  