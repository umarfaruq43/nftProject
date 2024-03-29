
import React from "react";
import Product from "../Product";

function ProductsLanding() {
  return (
    <div>
      <div className="container-xxl py-2" id="road">
        <div className="container">
          <div className="row">
            <div className="container py-1 mb-0">
              <div
                className="text-center wow fadeInUp mt-5"
                data-wow-delay="0.1s"
              >
                <h4 className="ff-secondary text-center text-warning fw-semi-bold">
                  Preliminary Roadmap
                </h4>
              </div>
            </div>
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsLanding;
