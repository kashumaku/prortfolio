import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import ServiceDetail from "../../pages/Details/ServiceDetail";

const Card = ({ emoji, heading, detail, color }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button onClick={() => setShowDetail(!showDetail)} className="c-button">
        LEARN MORE
      </button>

      {showDetail && (
        <ServiceDetail service={detail} setShowDetail={setShowDetail} />
      )}
    </div>
  );
};

export default Card;
