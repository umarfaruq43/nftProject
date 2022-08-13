import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";


function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div style={{ zIndex: "1", minHeight: "100vh" }}>
      <div className="container-xxl mb-10">
        <Navbar />

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          style={{
            position: "absolute",
            left: "50%",
            top: "25%",
            transform: "translateX(-50%)",
          }}
        >
          <h1
            className="display-5  animated slideInLeft text-center pt-5 mt-5 ff-secondary"
            style={{ color: "#FC0FC0" }}
          >
            We are the lizards of Kadena.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
