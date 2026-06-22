import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const IntroCard = () => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <Col xs={12} md={4}>
            <div>
              <img src="" alt="Logo Negozio" className="img-fluid"></img>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h3>Oro, passione, artigianalità dal 1980</h3>
          </Col>
          <Col xs={12} md={4}>
            <Button variant="primary">Visita il sito</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IntroCard;
