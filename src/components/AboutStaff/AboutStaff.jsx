
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
              Team
            </h5>
            <h1 className="mb-5">Core Team </h1>
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
                    src="https://media.discordapp.net/attachments/960569281295310858/982049912025927700/unknown.png"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Komrade</h5>
                <small>Founder</small>
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
                    src="https://media.discordapp.net/attachments/960569281295310858/982050067299049572/unknown.png"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Malone</h5>
                <small>Community Lead</small>
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
                    src="https://media.discordapp.net/attachments/960569281295310858/982050350305533992/unknown.png"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">AbuMusa </h5>
                <small>Developer</small>
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
                    src="https://media.discordapp.net/attachments/960569281295310858/982261880376660018/632.png"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-0">Doc Reptilian</h5>
                <small>Aritst</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStaff;
