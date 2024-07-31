import Items from "./Items";
import styles from './ItemsAdd.module.css';
const ItemsAdd = ({ itemList, onDeleteClick }) => {
  return (
    <>
  
        {itemList.map((item) => (
          <Items todoName={item.iname} todoDate={item.dueDate } onDeleteClick={onDeleteClick} ></Items>
        ))}
    
    </>
  );
};

export default ItemsAdd;
