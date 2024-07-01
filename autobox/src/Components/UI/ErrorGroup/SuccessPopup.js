import styles from "./Error.module.css";

const SuccessPopup = () => {
  return (
    <div className={`${styles.popup} ${styles.success} show`}>
      <div className={styles.popupContent}>
        <div className={styles.message}>Успех!</div>
        <box-icon name='x' color="#23272e" className={styles.closeButton} />
      </div>
    </div>
  );
};

export default SuccessPopup;
