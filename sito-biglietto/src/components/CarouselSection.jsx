import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { imagesSlideCarousel } from "../data/data";
import { useRef, useEffect, useState } from "react";

const CarouselSection = () => {
  const boxRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Avvio animazione in uscita
      setAnimateText(true);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % imagesSlideCarousel.length);
        setAnimateText(false);
      }, 600);
    }, 7000);

    ScrollReveal().reveal(boxRef.current, {
      duration: 2000,
      distance: "50px",
      origin: "right",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
    });

    return () => clearInterval(interval);
  });

  return (
    <>
      <Container className="mb-5 " id="container-carousel">
        <Row id="row_aboutUs">
          <Col xs={12} md={12}>
            <div className="div-title-products">
              <span className="span-target1"></span>
              <h4 className="text-center">Chi Siamo</h4>
              <span className="span-target2"></span>
            </div>
            <div id="carousel_aboutUs">
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  src={imagesSlideCarousel[currentIndex].image}
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
                {imagesSlideCarousel[currentIndex].h1 && (
                  <h1>{imagesSlideCarousel[currentIndex].h1}</h1>
                )}
                <p>{imagesSlideCarousel[currentIndex].p}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row id="row_products">
          <Col id="col-carousel" xs={12} md={12}>
            <div className="div-title-products">
              <span className="span-target3"></span>
              <h4 className="text-center">La Nostra Collezione</h4>
              <span className="span-target4"></span>
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
