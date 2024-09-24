import React from 'react';
// import AnimatedText from './AnimatedText';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';


const HomePage = () => {
  return (
    <Container fluid className="homepage-container bg-grey text-center" style={{ color: '#66FCF1' }}>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col md={9}>
        <h1 className="snippet-lab-title">WELCOME TO SNIPPET LAB!</h1>
          <h1 className="snippet-lab-world">Hello World !</h1>
         
          <p style={{fontFamily: 'Times New roman',color: '#C5C6C7', justifyContent:'center', fontSize:'1.5rem'}}>Snippet Lab allows users to write and run code in multiple programming languages using built-in code editor where they can view the output instantly. The users can share their code and results through links, or as PDFs.  It also has special features like flashcards section where users can learn programming concepts like syntax, commands, and functions, and they can create and save their own flashcards.</p>
          <div className="buttons-section mt-4">
            <Button variant="outline-info" className="me-2" size="lg">Start Coding</Button>
            <Button variant="outline-info" className="me-2" size="lg">Start Learning</Button>
            <Button variant="outline-info" size="lg">View Flashcards</Button>
          </div>
        </Col>
      </Row>
      
      <Row className="videos-section mt-5">
        <Col style={{backgroundColor:'black', color:'White',fontFamily:'Times new roman'}}><h1>Lets have a quick look at what we have !!!</h1></Col>
        {/* C Programming */}
        <Col md={12} className="video-card">
          <Card className="text-white bg-dark mb-4">
            <Card.Body>
              <video style={{ width: '1000px', height: 'auto' }} controls>
                <source src="/org1.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <Card.Title>C Programming</Card.Title>
              <Card.Text>C is a low-level programming language that provides fine-grained control over hardware. It's known for its speed and efficiency, making it suitable for system programming and embedded systems. C's syntax is relatively simple and direct, but it requires manual memory management, which can be error-prone if not handled carefully.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Java Programming */}
        <Col md={12} className="video-card">
          <Card className="text-white bg-dark mb-4">
            <Card.Body>
              <video style={{ width: '1000px', height: 'auto' }} controls>
                <source src="/org1.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <Card.Title>Java Programming</Card.Title>
              <Card.Text>Java is a high-level language designed for platform independence, meaning code can run on any system with a Java Virtual Machine (JVM). It's a fully object-oriented language with automatic memory management (garbage collection), reducing the risk of memory leaks. Java has a large and active community, providing a rich ecosystem of libraries and frameworks.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Python Programming */}
        <Col md={12} className="video-card">
          <Card className="text-white bg-dark mb-4">
            <Card.Body>
              <video style={{ width: '1000px', height: 'auto' }} controls>
                <source src="/org1.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <Card.Title>Python Programming</Card.Title>
              <Card.Text>Python is a high-level language known for its readability and simplicity, making it easy to learn and use. It's an interpreted language, meaning code is executed line by line, which is suitable for rapid development and prototyping. Python is versatile and can be used for web development, data analysis, machine learning, and automation. It has an extensive ecosystem of libraries and frameworks, such as NumPy, Pandas, TensorFlow, and Django.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* C++ Programming */}
        <Col md={12} className="video-card">
          <Card className="text-white bg-dark mb-4">
            <Card.Body>
              <video style={{ width: '1000px', height: 'auto' }} controls>
                <source src="/org1.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <Card.Title>C++ Programming</Card.Title>
              <Card.Text>C++ is an object-oriented language based on C, offering features like classes, objects, and inheritance. It's more versatile than C and can be used for a wider range of applications, from system programming to game development and data science. C++ offers good performance, though not as low-level as C, and its complexity can be higher due to its object-oriented features.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2>Meet Our Team</h2>
<Row>
  <Col md={3}>
    <Card className="team-card">
      <Card.Img 
        variant="top" 
        src="/B.jpg" 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body>
        <Card.Title>BHAVADHARANI M</Card.Title>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3}>
    <Card className="team-card">
      <Card.Img 
        variant="top" 
        src="/H.jpg" 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body>
        <Card.Title>HARISHMA D</Card.Title>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3}>
    <Card className="team-card">
      <Card.Img 
        variant="top" 
        src="/path-to-team-member2.jpg" 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body>
        <Card.Title>EVELYN DAVID</Card.Title>
      </Card.Body>
    </Card>
  </Col>
</Row>

    </Container>

    
  );
};

export default HomePage;






