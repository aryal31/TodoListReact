import styles from "./Items.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Items = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className={styles.container}>
      <div className={styles.box}>{todoName}</div>
      <div className={styles.date}>{todoDate}</div>
      <button
        className={styles.deleteButton}
        onClick={() => deleteItem(todoName)}
      >
        Delete
      </button>
    </div>
  );
};

export default Items;
