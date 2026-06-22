import { Container, Row, Col } from "react-bootstrap";

const IntroCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Card 1</h3>
            <p>This is the content for the first card.</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Card 2</h3>
            <p>This is the content for the second card.</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Card 3</h3>
            <p>This is the content for the third card.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IntroCard;
