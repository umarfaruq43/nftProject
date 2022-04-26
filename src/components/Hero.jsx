import { useEffect } from "react";
import Background from "../assets/coin.png";
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
      <div className="container-xxl py-5  mb-5">
        <Navbar />
        <div className="container my-5 py-4">
          <div className=" equal">
            <div
              className="col-lg-6 text-center text-lg-start"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1
                className="display-3  animated slideInLeft"
                style={{ color: "#fea116" }}
              >
                Kadena Komodos
              </h1>
              <p className="text-white animated text-light slideInLeft mb-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat minus, dolorem tempora veritatis nihil dolores?
              </p>
              <a
                href="https://"
                className="btn btn-warning py-sm-3
                            px-sm-5 me-3 animated slideInLeft"
              >
                Join Kadena
              </a>
            </div>
            <div
              className=" text-center text-lg-end overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={Background} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
