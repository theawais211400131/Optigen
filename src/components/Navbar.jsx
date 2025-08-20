import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // SPA navigation
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // To track current route

  const handleBooking = () => {
    alert("Booking a call...");
  };

  // B key to book a call
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === "b") {
        handleBooking();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-glass py-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">Optigen</Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/project" ? "active" : ""}`}
                to="/project"
              >
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/howwework" ? "active" : ""}`}
                to="/howwework"
              >
                Latest
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/customer" ? "active" : ""}`}
                to="/customer"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Book button */}
          <button className="btn btn-outline-light" onClick={handleBooking}>
            Press <strong>B</strong> to book a call
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
