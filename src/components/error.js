import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className="error-page">
    <h1>Page not found</h1>
    <Link to="/" className="button">
      Home
    </Link>
  </div>
);

export default ErrorPage;