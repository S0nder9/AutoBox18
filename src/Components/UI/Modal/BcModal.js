import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./BcModal.module.css";

const BcModal = ({ onClick }) => {
    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={onClick}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            </div>
        </div>,
        document.getElementById("bcModal")
    );
};

export default BcModal;
