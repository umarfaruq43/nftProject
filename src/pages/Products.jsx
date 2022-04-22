import React from "react";
import "../App.css";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCoffee,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function Products() {
  return (
    <div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Urbane Foods Amazing Products
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <div className="d-flex justify-content-center align-items-center">
                <li>
                  <Link className="text-decoration-none text-white" to="/">
                    HOME /
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white" to="/about">
                    ABOUT /{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white"
                    to="/contact"
                  >
                    Contact /{" "}
                  </Link>
                </li>
              </div>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5 mb-0">
        <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
          <h4 className="ff-secondary text-center text-warning fw-semi-bold">
            Delicious meals from Urbane Foods
          </h4>
          <h1 className="mb-5">Most Popular Delicacies</h1>
        </div>

        <div
          className="tab-class text-center wow fadeInUp mt-5"
          data-wow-delay="0.1s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <FontAwesomeIcon
                  icon={faCoffee}
                  className="fa-3x text-warning"
                />
                <div className="ps-3">
                  <small className="text-dark">Popular</small>
                  <h6 className="mt-n1 mb-0 text-dark fw-bold">Breakfast</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <FontAwesomeIcon
                  icon={faBurger}
                  className="fa-3x text-warning"
                />
                <div className="ps-3">
                  <small className="text-dark">Special</small>
                  <h6 className="mt-n1 mb-0 text-dark fw-bold">Launch</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="fa-3x text-warning"
                />
                <div className="ps-3">
                  <small className="text-body">Lovely</small>
                  <h6 className="mt-n1 mb-0 fw-bold text-dark">Dinner</h6>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Products;
