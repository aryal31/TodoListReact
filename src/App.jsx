import "./App.css";
import ToDoTitle from "./Components/ToDoTitle";
import AddTodo from "./Components/AddTodo";
import ItemsAdd from "./Components/ItemsAdd.jsx";
import Container from "./Components/Container.jsx";
import ErrorMsg from "./Components/ErrorMsg.jsx";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store.jsx";

function App() {
  // const items = [

  // ];

  const [itemList, setTodoItem] = useState([]);

  const addNewItem = (name, date) => {
    setTodoItem((currValue) => [
      {
        iname: name,
        dueDate: date,
      },
      ...currValue,
    ]);
  };

  const deleteItem = (itemName) => {
    const newTodoItems = itemList.filter((item) => item.iname !== itemName);
    setTodoItem(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{ itemList, addNewItem, deleteItem }}>
      <Container>
        <ToDoTitle />
        <AddTodo></AddTodo>
        <ErrorMsg></ErrorMsg>
        <ItemsAdd></ItemsAdd>
      </Container>
    </TodoItemsContext.Provider>
  );
}

export default App;
