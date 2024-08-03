import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Items from "./Items";
import styles from "./ItemsAdd.module.css";

const ItemsAdd = () => {

  // const contextObj = useContext(TodoItemsContext);
  // const itemList = contextObj.itemList;
  const {itemList} = useContext(TodoItemsContext);
  


  return (
    <>
      {itemList.map((item) => (
        <Items
          todoName={item.iname}
          todoDate={item.dueDate}
        ></Items>
      ))}
    </>
  );
};

export default ItemsAdd;
