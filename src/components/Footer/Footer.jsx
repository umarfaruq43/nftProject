
import { Link } from "react-scroll/modules";
// import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-link footer 
        pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4
                className="section-title ff-secondary text-start
                        text-warning fw-normal mb-4"
              >
                Kadena Komodos
              </h4>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn btn-link"
              >
                About Us
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
            <div className="col-lg-3 col-md-6" id="contact">
              <h4
                className="section-title ff-secondary text-start text-warning
                        fw-normal mb-4"
              >
                Contact
              </h4>
              <p className="mb-2 ">
                <a href="https://discord.gg/JxE2KfJxtU" className="text-light">
                  {/* <FontAwesomeIcon icon={faMaLinkMarked} className="me-3" /> */}
                  <FaDiscord className="me-3 text-light" />
                  Discord
                </a>
              </p>
              <p className="mb-2 ">
                <a
                  href="https://twitter.com/KadenaKomodos"
                  className="text-light"
                >
                  {/* <FontAwesomeIcon icon={faMaLinkMarked} className="me-3" /> */}
                  <FaTwitter className="me-3 text-light" />
                  Twitter
                </a>
              </p>

              <div className="d-flex pt-2">
                {/* <a href="" className="btn btn-outline-light btn-social">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-light">
                <h4
                  className="section-title ff-secondary text-start text-warning
                                fw-normal mb-4"
                >
                  Opening
                </h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>24/7</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>24/7</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-light">
                <h4
                  className="section-title ff-secondary text-start text-warning
                                fw-normal mb-4"
                >
                  Newsletter
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="position-relative mx-auto" max-width="400px">
                  <input
                    className="form-control border-warning w-100 py-3
                                ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button
                    type="button"
                    className="btn btn-warning py-2 position-absolute
                                top-0 end-0 mt-2 me-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
