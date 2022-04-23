import React from "react";
import Nft from "../../assets/about-1.jpeg";
import Chair2 from "../../assets/about-2.jpeg";
import Chair3 from "../../assets/about-3.jpeg";
import Chair4 from "../../assets/about-1.jpeg";
function AboutWelcom() {
  return (
    <div>
      <div className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={Nft}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "zoomIn",
                    }}
                    data-aos="fade-down-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={Chair2}
                    alt="hello"
                    style={{
                      marginTop: "25%",
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "zoomIn",
                    }}
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={Chair3}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "zoomIn",
                    }}
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={Chair4}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "zoomIn",
                    }}
                    data-aos="fade-up-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-warning fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                {/* Welcome to   */}
                {/* <i className="fa fa-utensils text-warning me-2"></i> */}
                Kadena Komodos
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis minima voluptatum vero excepturi, inventore nihil.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                laudantium eligendi quibusdam totam magni saepe fugiat
                doloremque possimus dicta. Deserunt, non ea? Fugit, perferendis?
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-warning mb-0"
                      data-toggle="counter-up"
                    >
                      15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-warning mb-0"
                      data-toggle="counter-up"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Nft Exchnage</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWelcom;
