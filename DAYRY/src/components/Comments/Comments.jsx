import React from "react";
import item from "../Item/Item.module.scss";

function Comments({ comment }) {
  return (
    <div className={item.wrapper}>
      <div className={item.box}>
        <h2 className={item.title}>Comments #{comment} </h2>
        <form className={item.formBox} action="">
          <input className={item.InputColor} type="color" />
          <textarea
            className={item.input}
            type="text"
            placeholder="Type name here..."
          />
          <button className={item.btn} type="button">
            Add New
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
