import React from "react";
import "./css/PageNotFound.css";
import "animate.css";
function PageNotFound() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col col-md-12 ">
          <div className="message">
            <h1 className="message_404 text-light animate__animated animate__zoomIn">
              404
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
