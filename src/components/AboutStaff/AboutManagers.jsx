import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function AboutManagers() {
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
              Managers
            </h5>
            <h1 className="mb-5">Community Managers </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            ></div>

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
                    src="https://media.discordapp.net/attachments/947975819324694542/981526539931910154/392.png"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Live2own </h5>
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
                    src="https://media.discordapp.net/attachments/960569281295310858/982049987443691580/unknown.png"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Growthmindset</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutManagers;
