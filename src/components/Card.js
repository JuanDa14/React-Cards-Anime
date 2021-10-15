import React from "react";
import "./css/card.css";
import "animate.css";
function Card({ title, img, text }) {
  return (
    <div className="container-card">
      <div className="card text-center bg-dark animate__animated animate__zoomIn">
        <div className="img-edit-container">
          <img className="card-img-top img-fluid img-edit" src={img} alt="" />
        </div>
        <div className="card-body text-light p-4">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
