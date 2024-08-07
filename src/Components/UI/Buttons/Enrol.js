import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Enrol.module.css";
import {
    entrySliceClose,
    entrySliceOpen,
} from "../../../Store/Slices/entrySlice";
import Modal from "../Modal/Modal";
import BcModal from "../Modal/BcModal";

const Enrol = (props) => {
    const [anim, setAnim] = useState(false);
    const openModalWindow = useSelector(
        (state) => state.entrySlice.entrySliceOpenState
    );
    const dispatch = useDispatch();

    const animationActivationHandler = () => {
        setAnim(true);
    };

    return (
        <>
            <button
                className={styles.button}
                onClick={() => dispatch(entrySliceOpen())}
            >
                {props.text}
            </button>
            {openModalWindow && (
                <Modal onClose={() => dispatch(entrySliceClose())}>
                    <BcModal onClick={animationActivationHandler} />
                </Modal>
            )}
        </>
    );
};

export default Enrol;
