import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faDollarSign,
  faHeadset,
  faUsers,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="container-xxl py-3">
        <div className="container">
          <div className="mb-5 text-center">
            <h2
              className="section-title ff-secondary text-start text-warning
                                fw-normal"
            >
              Our Services
            </h2>
          </div>
          <div className="row g-4">
            {/* card 1 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="fa-3x text-warning mb-3"
                  />
                  <h5>Nft Club</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eum, deserunt.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="fa-3x text-warning mb-3"
                  />
                  <h5>Wealthy</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo recusanda.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.6s"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className="fa-3x text-warning mb-3"
                  />
                  <h5>Online Order</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, nesciunt.
                  </p>
                </div>
              </div>
            </div>
            {/* card4 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="service-item rounded-pt-3">
                <div className="p-4">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="fa-3x text-warning mb-3"
                  />
                  <h5 className="pt-3">Customer Care</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae, ullam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
