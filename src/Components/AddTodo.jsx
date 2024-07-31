import { useState } from "react";
import Container from "./Container";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleOnClick = () => {
    if (name && date) {
      onNewItem(name, date);
      setName("");
      setDate("");
    } else {
      alert("please fill in both fields.");
    }
  };
  return (
    <Container>
      <div className={styles.container}>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          placeholder="Enter task name"
        />
        <input type="date" onChange={handleDateChange} value={date} />
        <button onClick={handleOnClick} className={styles.addButton}>
          add
        </button>
      </div>
    </Container>
  );
}

export default AddTodo;
