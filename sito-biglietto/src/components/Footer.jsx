import { Container, Row, Col } from "react-bootstrap";
import LogoSito from "../assets/Logo-AeG.png";

const Footer = () => {
  return (
    <>
      <Container id="container_footer">
        <Row>
          <Col
            xs={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              id="div_logo_footer"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={LogoSito}
                alt="Logo del negozio"
                className="img-fluid w-50"
              />
            </div>
          </Col>
          <Col xs={6}>
            <h4>P. IVA IT07187881219</h4>
            <h4>info@gioielliaeg.com</h4>
            <a
              href="https://www.gioielliaeg.com/privacy-policy-ue/?_gl=1*71kuwi*_ga*MTkxODQ4MDM1MS4xNzgxNTQ1MjM1*_ga_GW90WWK738*czE3ODIxMzU4MzkkbzQkZzAkdDE3ODIxMzU4NDMkajU2JGwwJGgw"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.gioielliaeg.com/termini-e-condizioni/?_gl=1*71kuwi*_ga*MTkxODQ4MDM1MS4xNzgxNTQ1MjM1*_ga_GW90WWK738*czE3ODIxMzU4MzkkbzQkZzAkdDE3ODIxMzU4NDMkajU2JGwwJGgw"
              target="_blank"
            >
              Termini e Condizioni
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
