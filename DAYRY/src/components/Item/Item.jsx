import item from "./Item.module.scss";
import React from "react";
import Card from "./Card/Card";

function Item({
  sendTextBtn,
  todosItem,
  deleteCard,
  selectTodoId,
  setSelectTodoId,
  setComment,
  setInputText,
  isInputText,
}) {
  return (
    <div className={item.wrapper}>
      <div className={item.box}>
        <h2 className={item.title}>Items</h2>
        <form className={item.formBox} action="">
          <input
            className={item.input}
            value={isInputText}
            onChange={(event) => setInputText(event.target.value)}
            placeholder="Type name here..."
          />
          <button
            className={item.btn}
            onClick={() => sendTextBtn()}
            type="button"
          >
            Add New
          </button>
        </form>
      </div>

      {todosItem.map((el, index) => {
        return (
          <Card
            deleteCard={deleteCard}
            selectTodoId={selectTodoId}
            setSelectTodoId={setSelectTodoId}
            setComment={setComment}
            key={index}
            {...el}
          />
        );
      })}
    </div>
  );
}

export default Item;
