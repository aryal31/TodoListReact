import "./App.css";
import ToDoTitle from "./Components/ToDoTitle";
import AddTodo from "./Components/AddTodo";
import ItemsAdd from "./Components/ItemsAdd.jsx";
import Container from "./Components/Container.jsx";
import ErrorMsg from "./Components/ErrorMsg.jsx";
import { useState } from "react";

function App() {
  // const items = [

  // ];

  const [items, setTodoItem] = useState([]);

  const onNewItem = (name, date) => {
    const newItemList = [{
      iname: name,
      dueDate: date,
    },
      ...items,
    ];
    setTodoItem(newItemList);
  };

  const handleDeleteItem=(itemName)=>{
    const newTodoItems = items.filter(item => item.iname !== itemName);
    setTodoItem(newTodoItems);
  }
  
  return (
    <>
      <Container>
        <ToDoTitle />
        <AddTodo itemList={items} onNewItem={onNewItem}></AddTodo>
        <ErrorMsg itemList={items}></ErrorMsg>
        <ItemsAdd itemList={items} onDeleteClick={handleDeleteItem}></ItemsAdd>
      </Container>
    </>
  );
}

export default App;
