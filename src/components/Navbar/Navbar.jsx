import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    return (
      <div className="row "  >
        <div className="container position-relative mx-auto left-0 p-0">
          <nav
            className="navbar navbar-expand-lg navbar-dark  px-4 px-lg-5
        py-0 py-lg-0 "
          >
            {/* Product Brand */}
            <Link to="" className="navbar-brand p-0">
              <h2 className="text-warning m-0">
               
                Kadena Komodos
              </h2>
            </Link>

            {/* Toogler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            {/* nav content + Links */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0 px-3 text-start">
                <Link
                  to=""
                  className="nav-item nav-link active
                    link-underline link-underline-warning"
                >
                  Roadmap
                </Link>
                <Link
                  to="/"
                  className="nav-item nav-link active
                    link-underline link-underline-warning"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="nav-item nav-link active
                    link-underline link-underline-warning"
                >
                  Collection
                </Link>
                <Link
                  to="/"
                  className="nav-item nav-link active
                    link-underline link-underline-warning"
                >
                  Contact
                </Link>

                <Link
                  to="/"
                  className="nav-item nav-link active
                    link-underline link-underline-warning"
                >
                  Team
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
}

export default Navbar
