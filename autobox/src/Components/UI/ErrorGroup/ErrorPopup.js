import styles from "./Error.module.css";

const ErrorPopup = () => {
  return (
    <div className={`${styles.popup} ${styles.error} show`}>
      <div className={styles.popupContent}>
        <div className={styles.message}>Ошибка!</div>
        <box-icon name='x' color="#23272e" className={styles.closeButton} />
      </div>
    </div>
  );
};

export default ErrorPopup;
