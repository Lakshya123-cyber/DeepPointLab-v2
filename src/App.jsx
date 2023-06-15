import { useContext } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import BlogPost from "./components/blog/BlogPost";
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

      <Routes>
        <Route path="/" element={<Intro />} exact />
        <Route path="/" element={<About />} exact />
        <Route path="/" element={<ProductList />} exact />
        <Route path="/" element={<Testimonials />} exact />
        <Route path="/blogs" element={<BlogPost />} exact />
        <Route path="/" element={<Contact />} exact />
      </Routes>
    </div>
  );
};

export default App;
