import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <div>
              <img src="" alt="Logo del negozio" className="img-fluid" />
            </div>
          </Col>
          <Col xs={6}>
            <h4>P. IVA: 01234567890</h4>
            <h4>E-mail</h4>
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
