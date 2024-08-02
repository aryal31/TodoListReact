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

  const handleOnClick = (event) => {
    if (name && date) {
      event.preventDefault();
      onNewItem(name, date);
      setName("");
      setDate("");
    } else {
      alert("please fill in both fields.");
    }
  };
  return (
    <Container>
      <form className={styles.container} onSubmit={handleOnClick} >
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          placeholder="Enter task name"
        />
        <input type="date" onChange={handleDateChange} value={date} />
        <button className={styles.addButton}>
          add
        </button>
      </form>
    </Container>
  );
}

export default AddTodo;
