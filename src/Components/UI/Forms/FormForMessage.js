import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import ErrorPopup from "../ErrorGroup/ErrorPopup";
import SuccessPopup from "../ErrorGroup/SuccessPopup";
import useValidForm from "../../../Hooks/useValidForm";
import useHttp from "../../../Hooks/useHttp";
import styles from "./FormForMessage.module.css";

const FormForMessage = ({ display }) => {
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [errorStateForTg, setErrorStateForTg] = useState(undefined);

    const refName = useRef();
    const refPhone = useRef();
    const refEmail = useRef();
    const refText = useRef();

    const [refNameValue, setRefNameValue] = useState("");
    const [refPhoneValue, setRefPhoneValue] = useState("");
    const [refEmailValue, setRefEmailValue] = useState("");
    const [refTextValue, setRefTextValue] = useState("");

    // const { notEmty: isTextNotEmpty, correctPhoneNumber: isPhoneNumberValid, correctEmail: isEmailValid } = useValidForm(refPhoneValue);
    const { correctPhoneNumber: isPhoneNumberValid } =
        useValidForm(refPhoneValue);
    const { correctEmail: isEmailValid } = useValidForm(refEmailValue);
    const { notEmpty: isTextNotEmpty } = useValidForm(refTextValue);

    useEffect(() => {
        if (refName.current) {
            setRefNameValue(refName.current.value);
        }

        if (refPhone.current) {
            setRefPhoneValue(refPhone.current.value);
        }

        if (refEmail.current) {
            setRefEmailValue(refEmail.current.value);
        }
        if (refText.current) {
            setRefTextValue(refText.current.value);
        }
    }, [
        refName.current?.value,
        refPhone.current?.value,
        refEmail.current?.value,
        refText.current?.value,
    ]);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const sentDataHandler = (e) => {
        e.preventDefault();
        const newErrors = [];

        if (!isPhoneNumberValid) {
            newErrors.push("Укажите номер телефона");
        }

        if (!isEmailValid) {
            newErrors.push("Укажите email");
        }

        if (!isTextNotEmpty) {
            newErrors.push("Укажите текст");
        }

        if (!isChecked) {
            newErrors.push(
                "Вы должны согласиться с политикой конфиденциальности"
            );
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            setSuccessMessage("");
        } else {
            setErrors([]);
            setSuccessMessage("Ожидайте, мы вам перезвоним");
            console.log(
                `Имя: ${refNameValue}, Номер телефона: ${refPhoneValue}`
            );
            sentDataToTelegramHandler();
        }
    };

    const { data } = useHttp(
        "https://autobox18-ba317-default-rtdb.firebaseio.com/BotToken.json",
        { method: "GET" }
    );

    const sentDataToTelegramHandler = async () => {
        if (!data) {
            setErrorStateForTg(true);
            return;
        }

        const botToken = data.Token;
        const chatId = data.ChatId;
        const url = `${data.UrlPart1}${botToken}${data.UrlPart2}`;

        const text = `
        <b>У вас новое сообщение:</b>\n
        <b>Имя:</b> ${refNameValue || "Не указано"}\n
        <b>Номер телефона:</b> <a href="tel:${refPhoneValue || "Не указан"}">${
            refPhoneValue || "Не указан"
        }</a>\n
        <b>Email:</b> <a href="mailto:${refEmailValue || "Не указан"}">${
            refEmailValue || "Не указан"
        }</a>\n
        <b>Текст сообщения:</b> <em>${refTextValue || "Не указан"}</em>
        `;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: "HTML",
                }),
            });

            if (!response.ok) {
                setErrorStateForTg(true);
            } else {
                setErrorStateForTg(false);
            }
        } catch (error) {
            console.error("Ошибка при отправке сообщения в Telegram:", error);
            setErrorStateForTg(true);
        }
    };

    return (
        <>
            {errors.map((error, index) => (
                <ErrorPopup key={index} timeOut="5000" message={error} />
            ))}

            {errorStateForTg && (
                <ErrorPopup
                    timeOut="5000"
                    message="Произошла какая-то ошибка при отправке данных"
                />
            )}
            {errorStateForTg === false && (
                <SuccessPopup timeOut="5000" message={successMessage} />
            )}
            <form
                className={styles.form}
                style={{ display: display }}
                onSubmit={sentDataHandler}
            >
                <input
                    placeholder="ВВЕДИТЕ ИМЯ"
                    type="text"
                    name="text"
                    className="input"
                    ref={refName}
                    onChange={() => setRefNameValue(refName.current.value)}
                />

                <input
                    placeholder="ВВЕДИТЕ НОМЕР ТЕЛЕФОНА *"
                    type="number"
                    name="text"
                    className="input"
                    ref={refPhone}
                    onChange={() => setRefPhoneValue(refPhone.current.value)}
                />

                <input
                    placeholder="ВВЕДИТЕ EMAIL *"
                    type="email"
                    name="text"
                    className="input"
                    ref={refEmail}
                    onChange={() => setRefEmailValue(refEmail.current.value)}
                />

                <textarea
                    placeholder="ВВЕДИТЕ ТЕКСТ *"
                    type="text"
                    name="message"
                    className="input"
                    style={{ height: "100px" }}
                    ref={refText}
                    onChange={() => setRefTextValue(refText.current.value)}
                />

                <div className={styles.privacyContainer}>
                    <input
                        type="checkbox"
                        id="privacy"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="privacy" className={styles.privacyText}>
                        согласен с{" "}
                        <Link to="/privacyPolicy">
                            <span className={styles.spanColor}>
                                политикой конфиденциальности *
                            </span>
                        </Link>
                    </label>
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={errorStateForTg === false}
                    style={{
                        backgroundColor: errorStateForTg === false ? "red" : "",
                        cursor: errorStateForTg === false ? "not-allowed" : "",
                    }}
                >
                    <span className="textWhiteSmall">ОТПРАВИТЬ ЗАЯВКУ</span>
                </button>
            </form>
        </>
    );
};

export default FormForMessage;
