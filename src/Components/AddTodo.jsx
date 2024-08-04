import { useContext, useRef } from "react";
import Container from "./Container";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleOnClick = (event) => {
    const name = todoNameElement.current.value;
    const date = dueDateElement.current.value;
    event.preventDefault();
    addNewItem(name, date);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <Container>
      <form className={styles.container} onSubmit={handleOnClick}>
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter task name"
        />
        <input ref={dueDateElement} type="date" />
        <button className={styles.addButton}>add</button>
      </form>
    </Container>
  );
}

export default AddTodo;
