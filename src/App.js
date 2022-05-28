import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Footer from "./components/Footer/Footer";
import { Parallax, useParallax } from "react-scroll-parallax";
import lizard from "./assets/lizard.gif";
import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  const [top, setTop] = useState(90);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [movement, setMovement] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setTop(window.pageYOffset + 200));

    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      if (this.oldScroll > this.scrollY) {
        setDown(true);
        setUp(false);
      } else {
        setUp(true);
        setDown(false);
      }
      this.oldScroll = this.scrollY;
    };
    return () => {
      setTimeout(() => {
        setDown(false);
        setUp(false);
      }, 2000);
    };
  }, [top]);

  return (
    <Router>
      <div className="App">
        <div
          width="100px"
          style={{
            position: "absolute",
            border: "1px solid red",
            top: `${top}px`,
            transition: "1s ease-in-out",
            zIndex: "1000",
            display: `${down ? "block" : "none"}`,
          }}
        >
          <img src={lizard} width="100px" alt="lizard" />
        </div>
        <div
          width="100px"
          style={{
            position: "absolute",
            border: "1px solid red",
            top: `${top}px`,
            transition: "1s ease-in-out",
            zIndex: "1000",
            transform: "scaleY(-1)",
            display: `${up ? "block" : "none"}`,
          }}
        >
          <img src={lizard} width="100px" alt="lizard" />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/products" element={<Homepage />} />
          <Route path="/contact" element={<Homepage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
