import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { motion as m } from "framer-motion";

function App() {
  return (
    <>
      <Header />
      <m.div
        className="container"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </m.div>
      <Footer />
    </>
  );
}

export default App;
