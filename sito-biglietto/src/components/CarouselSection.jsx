import { Container, Row, Col } from "react-bootstrap";
// import { AnimatePresence, motion } from "framer-motion";
// import ScrollReveal from "scrollreveal";

{
  /* <div id="carousel_container">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={imgCarouselProfile[currentIndex].image}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{
              duration: 0.6,
              ease: "cubic-bezier(0.5, 0, 0, 1)",
            }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>
        <div
          id="div_content"
          className={`carousel-text position-absolute ${animateText ? "fade" : ""}`}
        >
          {imgCarouselProfile[currentIndex].h1 && (
            <h1>{imgCarouselProfile[currentIndex].h1}</h1>
          )}
          <p>{imgCarouselProfile[currentIndex].p}</p>
        </div>
      // </div>
 */
}

const CarouselSection = () => {
  return (
    <>
      <Container className="mb-5 " id="container-carousel">
        <Row id="row_aboutUs">
          <Col xs={12} md={6}></Col>
        </Row>
        <Row id="row_products">
          <Col id="col-carousel" xs={12} md={6}>
            <div className="div-title-products">
              <span className="span-target1"></span>
              <h4 className="text-center">La Nostra Collezione</h4>
              <span className="span-target2"></span>
            </div>
            <div className="carousel ">
              <div className="group ">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
              </div>
              <div aria-hidden className="group">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarouselSection;
