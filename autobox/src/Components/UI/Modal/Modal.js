import React from 'react';
import styles from './Modal.module.css';
import FormForCall from '../Forms/FormForCall';
import FormForMessage from '../Forms/FormForMessage';
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from '../../../Store/Slices/changeColorSlice';

const Modal = ({ onClose, children }) => {
  const dispatch = useDispatch();
  const colorState = useSelector(state => state.changeColorState.colorState);
    
    return (
        <div className={styles.zModalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <box-icon name='x' color="#000" />
                </button>

                <p className="textBlackBig">ЗАПИСЬ</p>
                <div className={styles.tabContainer}>
                    <button 
                    className={`${styles.tabButton} ${!colorState && styles.activeTab}`} 
                    onClick={() => dispatch(changeState())}>ЗАКАЗАТЬ ЗВОНОК</button>

                    <button 
                    className={`${styles.tabButton} ${colorState && styles.activeTab}`} 
                    onClick={() => dispatch(changeState())}>НАПИСАТЬ НАМ</button>
                </div>

                {colorState ? <FormForMessage /> : <FormForCall />}

                {children}
            </div>
        </div>
    );
};

export default Modal;
