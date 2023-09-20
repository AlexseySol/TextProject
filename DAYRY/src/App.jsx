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

  const sendTextBtn = () => {
    if (isInputText) {
      setTodosItem([
        ...todosItem,
        { id: Math.floor(Math.random() * 1000000), text: isInputText },
      ]);
    } else {
      <p style={{ color: "red" }}>Поле обязательно для заполнения</p>;
    }

    setInputText("");
    localStorage.setItem("todosItem", JSON.stringify([...todosItem]));
  };

  const deleteCard = (id) => {
    setTodosItem(todosItem.filter((el) => id !== el.id));

    if (selectTodoId === id) {
      setSelectTodoId(null);
    }
    localStorage.setItem("todosItem", JSON.stringify([...todosItem]));
  };

  React.useEffect(() => {
    const stored = localStorage.getItem("todosItem");
    try {
      if (stored) {
        setTodosItem(JSON.parse(stored));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ContextApp.Provider
      value={{ selectTodoId, setComment, setSelectTodoId, deleteCard }}
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
