import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const HeroSection = () => {
  return (
    <>
      <Container id="hero_section_container">
        <Row className="d-flex flex-column align-items-center justify-content-center">
          <Col xs={12} md={4} id="social_zone">
            <Button
              onClick={() =>
                window.open("https://www.facebook.com/aeggioielli", "_blank")
              }
              className="btn-link"
              id="btn_facebook"
            >
              <img
                src="https://www.svgrepo.com/show/448224/facebook.svg"
                alt="logo-facebook"
                className="img-fluid"
              />
              <h4>Facebook</h4>
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.instagram.com/aeg_gioielli/", "_blank")
              }
              className="btn-link"
              id="btn_instagram"
            >
              <img
                src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                alt="logo-instagram"
                className="img-fluid"
              />
              <h4>Instagram</h4>
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.tiktok.com/@aeg_gioielli", "_blank")
              }
              className="btn-link"
              id="btn_tiktok"
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tiktok-rounded-square-icon.png"
                alt="logo-tiktok"
                className="img-fluid"
              />
              <h4>TikTok</h4>
            </Button>
          </Col>
          <Col xs={12} md={4} id="maps_position">
            <h4>Via Napoli, 269, 80022 Arzano NA</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.8369034457914!2d14.265189699999999!3d40.905594400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b077512fcb027%3A0x3872f1fd14720d7c!2sA%26G%20Gioielli!5e1!3m2!1sit!2sit!4v1782134100354!5m2!1sit!2sit"
              width="330"
              height="150"
              loading="lazy"
              id="maps_element"
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
