import React from "react";
import "./Preloader.scss";
import Spinner from "react-bootstrap/Spinner";

function Preloader() {
  return (
    <div className="preloader">
      <Spinner animation="border" variant="secondary" size="sm" />
    </div>
  );
}

export default Preloader;
