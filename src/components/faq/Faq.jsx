import React from "react";

const faq = () => {
  return (
    <div
      className="container-xxl py-1"
      style={{
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          zIndex: 10,
        }}
      >
        <h4 className="ff-secondary text-center text-warning fw-semi-bold mb-5">
          FAQ
        </h4>
        <div
          className="accordion"
          id="accordionExample"
          style={{
            zIndex: 10,
          }}
        >
          {/* ************************ */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                When is the Mint going to be?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <h2 className="accordion-body play">
                The mint is going to take place on the 4th of August!
              </h2>
            </div>
          </div>

          {/* *********************************** */}
          <div
            className="accordion-item"
            style={{
              color: "#fff",
              zIndex: 10,
            }}
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Where can I mint a Kadena Komodo?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={{
                color: "#fff",
                zIndex: 10,
              }}
            >
              <div
                className="accordion-body play"
                style={{
                  color: "#fff",
                  zIndex: 10,
                }}
              >
                You can mint a Kadena Komodo on the Kadena Bulls' launchpad at
                <a href="https://www.arkade.fun/mint/kadena-komodos">
                  {" "}
                  arkade.fun{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              color: "#fff",
              zIndex: 10,
            }}
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What is the minting price going to be?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={{
                color: "#fff",
                zIndex: 10,
              }}
            >
              <div className="accordion-body play">
                The supply is 1500 Komodos. The price for the whitelist mint is
                15 KDA and the price for the public mint is 20 KDA.
              </div>
            </div>
          </div>

          <div
            className="accordion-item"
            style={{
              color: "#fff",
              zIndex: 10,
            }}
          >
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                How to get whitelisted?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
              style={{
                color: "#fff",
                zIndex: 10,
              }}
            >
              <div className="accordion-body play">
                Follow our Twitter and Discord for ongoing whitelist
                competitions!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faq;
