import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Footer from "./components/Footer/Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  return (
    <Router>
      <div className="App">
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
