import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = ({ service, setShowDetail }) => {
  console.log(service);
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <span
          onClick={() => setShowDetail(false)}
          style={{
            fontSize: "30px",
            color: "red",
            position: "absolute",
            top: "6px",
            right: "10px",
            cursor: "pointer",
            border: "1px solid black",
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          x
        </span>
        <h1>Services Detail</h1>
        <h1>{service}</h1>
      </div>
    </div>
  );
};

export default ServiceDetail;
