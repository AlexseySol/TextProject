import React from "react";
import card from "./Card.module.scss";
import ContextApp from "../../../Context";

function Card({ id, text, quantity }) {
  const { selectTodoId, deleteCard, clickId } = React.useContext(ContextApp);

  return (
    <div
      className={`${card.wrapper} ${
        selectTodoId === id ? card.wrapper_activ : card.wrapper
      }`}
      onClick={() => clickId(id)}
    >
      <p>{text}</p>
      <div className={card.box}>
        <span>{quantity}</span>
        <button onClick={() => deleteCard(id)}>DELETE</button>
      </div>
    </div>
  );
}

export default Card;
