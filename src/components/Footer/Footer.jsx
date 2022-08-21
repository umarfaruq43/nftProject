import { Link } from "react-scroll/modules";
// import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div style={{ color: "#fff" }}>
      <div
        className="container-fluid bg-dark text-link footer 
        pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-lg-6 col-md-6"
              style={{
                color: "#fff",
                zIndex: 10,
              }}
            >
              <h4
                className="section-title ff-secondary text-start
                        text-warning fw-normal mb-4"
              >
                Kadena Komodos
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  color: "#fff",
                  zIndex: 10,
                }}
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="btn btn-link "
                >
                  <span
                    style={{
                      color: "#fff",
                      zIndex: 10,
                    }}
                  >
                    {" "}
                    About Us
                  </span>
                </Link>
                <Link
                  to="road"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="btn btn-link"
                >
                  Roadmap
                </Link>
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="btn btn-link"
                >
                  Team
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              style={{
                color: "#fff",
                zIndex: 10,
              }}
              id="contact"
            >
              <h4
                className="section-title ff-secondary text-start text-warning
                        fw-normal mb-4"
              >
                Contact
              </h4>

              <div style={{ display: "flex", gap: "10px" }}>
                <p className="mb-2 ">
                  <a
                    href="https://discord.gg/q7j87wKXAG"
                    className="text-light"
                  >
                    <FaDiscord className="me-3 text-light" />
                    Discord
                  </a>
                </p>
                <p className="mb-2 ">
                  <a
                    href="https://twitter.com/KadenaKomodos"
                    className="text-light"
                  >
                    <FaTwitter className="me-3 text-light" />
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
