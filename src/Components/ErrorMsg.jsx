import styles from "./ErrorMsg.module.css";

const ErrorMsg = ({ itemList }) => {
  return (
    <>
      {itemList.length === 0 && (
        <h1 className={styles.error}>Enjoy your day!</h1>
      )}
    </>
  );
};

export default ErrorMsg;
