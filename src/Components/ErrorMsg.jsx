import styles from "./ErrorMsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const ErrorMsg = () => {

  // const contextObj = useContext(TodoItemsContext);
  // const itemList = contextObj.itemList;


  const {itemList} = useContext(TodoItemsContext);
  return (
    <>
      {itemList.length === 0 && (
        <h1 className={styles.error}>Enjoy your day!</h1>
      )}
    </>
  );
};

export default ErrorMsg;
