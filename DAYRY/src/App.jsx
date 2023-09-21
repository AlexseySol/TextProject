import app from "./App.module.scss";
import React from "react";
import DayryApp from "./components/DayryApp/DayryApp";
import Item from "./components/Item/Item";
import ContextApp from "./Context";
import Comments from "./components/Comments/Comments";

function App() {
  const [isInputText, setInputText] = React.useState("");
  const [comment, setComment] = React.useState(null);
  const [todosItem, setTodosItem] = React.useState([]);
  const [selectTodoId, setSelectTodoId] = React.useState(
    todosItem.length > 0 ? todosItem[0].id : null
  );

  const newTodosItem = [
    ...todosItem,
    { id: Math.floor(Math.random() * 1000000), text: isInputText, quantity: 0 },
  ];

  const sendTextBtn = () => {
    if (isInputText) {
      setTodosItem(newTodosItem);
      clickId(newTodosItem[0].id);
      localStorage.setItem("todosItem", JSON.stringify(newTodosItem));
    }
    setInputText("");
  };

  const deleteCard = (id) => {
    const del = todosItem.filter((el) => id !== el.id);
    setTodosItem(del);

    localStorage.setItem("todosItem", JSON.stringify(del));

    if (selectTodoId === id) {
      setSelectTodoId(null);
    }
  };

  const clickId = (id) => {
    setSelectTodoId(id);
    setComment(id);
  };

  React.useEffect(() => {
    const stored = localStorage.getItem("todosItem");
    try {
      if (stored) {
        return setTodosItem(JSON.parse(stored));
      }
    } catch (error) {
      console.log(error);
    }
  }, [selectTodoId]);

  return (
    <ContextApp.Provider
      value={{
        selectTodoId,
        deleteCard,
        clickId,
        newTodosItem,
      }}
    >
      <div className={app.wrapper}>
        <DayryApp />
        <div className={app.boxItem}>
          <Item
            isInputText={isInputText}
            setInputText={setInputText}
            sendTextBtn={sendTextBtn}
            todosItem={todosItem}
          />
          <Comments comment={comment} />
        </div>
      </div>
    </ContextApp.Provider>
  );
}

export default App;
