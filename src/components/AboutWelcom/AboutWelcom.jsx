import React from "react";
import imgOne from "../../assets/img1.jpeg";
import imgtwo from "../../assets/img2.jpeg";
import imgThree from "../../assets/img3.jpeg";
import imgFour from "../../assets/img4.jpeg";
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
                    src={imgOne}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "zoomIn",
                    }}
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={imgtwo}
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
                    src={imgThree}
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
                    src={imgFour}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "zoomIn",
                    }}
                    data-aos="fade-up"
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
              <p className="mb-4 play">
                The slickest 1500 reptiles on Kadena. We as a community are home
                to great banter and memes, but we also boast with our
                intelligence and the ability to see great investment
                opportunities wherever they lie.
              </p>
              <p className="mb-4 play">
                But the benefits of being a part of the community don't stop
                there as the Komodos will be built to have inherent value to
                them. This might manifest as you getting an easy whitelist spot
                from another project or receiving a cool airdrop just for
                holding one of the Komodos.
              </p>
              <p className="mb-4 play">
                You are the boss. No, I mean, literally! As a holder, you will
                have access to our exclusive community DAO. This means that as a
                holder you get to have a vote in deciding the future direction
                of the project; your voting power, by the way, will scale in
                proportion to how many Komodos you hold. Feel free to gobble as
                much power as you want, lizard.
              </p>
              {/* <div className="row g-4 mb-4">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWelcom;
