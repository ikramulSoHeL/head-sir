import React from "react";
import "./errorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h2>404 Not Found</h2>
      <span>Oh no! The page you are looking for is not found.</span>

      <Link to="/" className="link">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
