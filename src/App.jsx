import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar />
      <div data-aos="fade-right">
        <Intro />
      </div>
      <div data-aos="fade-left">
        <About />
      </div>
      <div data-aos="flip-right">
        <ProductList />
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
      <div data-aos="zoom-in">
        <Blog />
      </div>
      <Contact />
    </div>
  );
};

export default App;
