import "./App.css";
import IntroCard from "./components/IntroCard";
import HeroSection from "./components/HeroSection";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <IntroCard />
      <span className="divided-section"></span>
      <HeroSection />
      <span className="divided-section"></span>
      <CarouselSection />
      <Footer />
    </>
  );
}

export default App;
