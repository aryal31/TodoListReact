import styles from './Items.module.css'

const Items = ({todoName,todoDate, onDeleteClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>{todoName}</div>
      <div className={styles.date}>{todoDate}</div>
      <button className={styles.deleteButton} onClick={()=>onDeleteClick(todoName)}>Delete</button>
    </div>
  );
};

export default Items;
