import React, { useEffect, useState } from 'react';
import styles from "./Error.module.css";

const ErrorPopup = (props) => {
  const [show, setShow] = useState(true);
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, props.timeOut);

    return () => clearTimeout(timer);
  }, [props.timeOut]);

  const handleClose = () => {
    setHideAnimation(true);
  };

  const handleAnimationEnd = () => {
    if (hideAnimation) {
      setShow(false);
    }
  };

  return (
    show && (
      <div
        className={`${styles.popup} ${styles.error} ${hideAnimation ? styles.hide : styles.show}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.popupContent}>
          <div className={styles.message}>Ошибка!<br />
            {props.message || ""}
          </div>
          <button className={styles.closeButton} onClick={handleClose}>
            <box-icon name='x' color="#fff" />
          </button>
        </div>
      </div>
    )
  );
};

export default ErrorPopup;
