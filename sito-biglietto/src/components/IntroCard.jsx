import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import LogoNegozio from "../assets/Logo-AeG.png";

const IntroCard = () => {
  return (
    <>
      <Container id="intro-card-container">
        <Row
          id="row_intro_card"
          className="d-flex justify-content-center text-center gap-4 p-5 position-relative z-2"
        >
          <Col xs={12} md={4}>
            <div>
              <img
                src={LogoNegozio}
                alt="Logo Negozio"
                className="img-fluid w-50 mt-3"
                id="img_logo_negozio"
              ></img>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h3 className="m-0">Oro, passione, artigianalità dal 1980</h3>
          </Col>
          <Col xs={12} md={4}>
            <Button
              onClick={() => window.open("https://gioielliaeg.com/", "_blank")}
              id="btn-onSite"
            >
              Visita il sito
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IntroCard;
