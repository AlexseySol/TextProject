import React from "react";
import card from "./Card.module.scss";
import ContextApp from "../../../Context";

function Card({ id, text, quantity }) {
  const { setComment, selectTodoId, setSelectTodoId, deleteCard } =
    React.useContext(ContextApp);

  const clickId = (id) => {
    setSelectTodoId(id);
    setComment(id);
  };

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
