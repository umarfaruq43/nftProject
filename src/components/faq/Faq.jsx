import React from "react";

const faq = () => {
  return (
    <div className="container-xxl py-1">
      <div className="container">
        <h4 className="ff-secondary text-center text-warning fw-semi-bold mb-5">
          FAQ
        </h4>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                When is the Mint going to be?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                As soon as there is a working, infallible minting system in
                Kadena. We speculate such a system will be in place sometime in
                the summer.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed "
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
            >
              <div className="accordion-body">
                We are currently waiting on the completion of Marmalade – the
                main NFT infrastructure being built on Kadena. We may opt for
                other alternatives should the completion of Marmalade take too
                long.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed "
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
            >
              <div className="accordion-body">
                We will follow the Kadena NFT ecosystem closely: its growth, the
                minting price of other similar projects, and also the crypto
                markets as a whole. Hence, we will decide on the price closer to
                the release date.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is there a whitelist?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, there will be around 200 whitelist spots available. They
                can be obtained through winning various contests and by being an
                active member of the community.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faq;
