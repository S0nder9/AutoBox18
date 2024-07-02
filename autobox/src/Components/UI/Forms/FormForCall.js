import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./FormForCall.module.css";
import { useRef, useState } from "react";
import ErrorPopup from "../ErrorGroup/ErrorPopup";

const FormForCall = ({ display }) => {
    const [isValid, setIsValid] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isChecked, setIsChecked] = useState(undefined);

    const refName = useRef();
    const refPhone = useRef();

    const sentDatahandler = (e) => {
        e.preventDefault();

        const currentName = refName.current.value;
        const currentPhone = refPhone.current.value;

        setName(currentName);
        setPhone(currentPhone);

        let isFormValid = true;

        if (currentName.trim() === "") {
            console.log("Неизвестный пользователь");
        }

        if (currentPhone.trim().length === 0) {
            isFormValid = false;
            if (!isFormValid){ return <ErrorPopup timeOut = "5000" message = "Введите номер телефона"/>}
        }

        if (!isChecked) {
            isFormValid = false;
            if (!isFormValid){ return <ErrorPopup timeOut = "5000" message = "Согласитесь с политикой конфиденциальности"/>}
        }

        setIsValid(isFormValid);

        console.log(currentName, currentPhone, "Пользователь согласился");
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <form className={styles.form} style={{ display: display }} onSubmit={sentDatahandler}>
                <input
                    placeholder="ВВЕДИТЕ ИМЯ"
                    type="text"
                    name="text"
                    className="input"
                    ref={refName}
                />

                <input
                    placeholder="ВВЕДИТЕ НОМЕР ТЕЛЕФОНА *"
                    type="number"
                    name="number"
                    className="input"
                    ref={refPhone}
                    style={{ borderColor: isValid === null ? "" : isValid ? "green" : "red" }}
                />

                <div className={styles.privacyContainer}>
                    <input
                        type="checkbox"
                        id="privacy"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="privacy" className={`${styles.privacyText} ${isChecked === false ? styles.error : ""}`}>
                        согласен с <Link to="/privacy-policy">
                            <span className={styles.spanColor}>политикой конфиденциальности *</span>
                        </Link>
                    </label>
                </div>

                <button type="submit" className={styles.submitButton}>
                    <span className='textWhiteSmall'>ОТПРАВИТЬ ЗАЯВКУ</span>
                </button>
            </form>
        </>
    );
};

export default FormForCall;
