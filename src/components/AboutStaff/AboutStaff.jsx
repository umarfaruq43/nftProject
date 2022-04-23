import Staff1 from "../../assets/team-1.jpg";
import Staff2 from "../../assets/team-2.jpg";
import Staff3 from "../../assets/team-3.jpg";
import Staff4 from "../../assets/team-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutStaff() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="team">
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp",
            }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h5 className="section-title ff-secondary text-center text-warning fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Team Members</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="team-item text-center rounded overflow-hidden"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={Staff1}
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="team-item text-center rounded overflow-hidden"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={Staff2}
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="team-item text-center rounded overflow-hidden"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={Staff3}
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="team-item text-center rounded overflow-hidden"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={Staff4}
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStaff;
