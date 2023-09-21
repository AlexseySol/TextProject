import React from "react";
import card from "./Card.module.scss";

function CardСomments({ text }) {
  return (
    <div className={card.wrapper}>
      <p>{text}</p>
    </div>
  );
}

export default CardСomments;
