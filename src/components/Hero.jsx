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
    <div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <Navbar />
        <div className="container my-5 py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Kadena Komodos
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
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
              className="col-lg-6 text-center text-lg-end overflow-hidden"
              data-aos="fade-up"
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
