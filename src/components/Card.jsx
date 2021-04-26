import React from "react";
// import "../components/cardStyle.css";

function Card(props) {
  return (
    <div className="card p-5 shadow h-100 ">
      <h3>{props.title}</h3>
      <p className="text-justify">{props.desc}</p>
    </div>
  );
}

export default Card;
