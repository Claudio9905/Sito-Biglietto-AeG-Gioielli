import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const HeroSection = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4} id="social_zone">
            <Button>Facebook</Button>
            <Button>Instagram</Button>
            <Button>TikTok</Button>
          </Col>
          <Col xs={12} md={4} id="maps_position">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.8369034457914!2d14.265189699999999!3d40.905594400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b077512fcb027%3A0x3872f1fd14720d7c!2sA%26G%20Gioielli!5e1!3m2!1sit!2sit!4v1782134100354!5m2!1sit!2sit"
              width="60"
              height="45"
              loading="lazy"
            ></iframe>
          </Col>
          <Col xs={12} md={4} id="contact_info_whatsapp">
            <h4>Per info e appuntamenti</h4>
            <Button>WhatsApp</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
