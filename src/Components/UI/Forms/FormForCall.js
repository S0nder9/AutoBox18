// import { Link } from "react-router-dom";
// import styles from "./FormForCall.module.css";
// import { useRef, useState, useEffect } from "react";
// import ErrorPopup from "../ErrorGroup/ErrorPopup";
// import SuccessPopup from "../ErrorGroup/SuccessPopup";
// import useValidForm from "../../../Hooks/useValidForm";
// import useHttp from "../../../Hooks/useHttp";

// const FormForCall = ({ display }) => {
//     const [errors, setErrors] = useState([]);
//     const [successMessage, setSuccessMessage] = useState("");
//     const [isChecked, setIsChecked] = useState(false);
//     const [errorStateForTg, setErrorStateForTg] = useState(undefined);

//     const refName = useRef();
//     const refPhone = useRef();

//     const [refNameValue, setRefNameValue] = useState("");
//     const [refPhoneValue, setRefPhoneValue] = useState("");

//     const { notEmpty: isNameNotEmpty, correctPhoneNumber: isPhoneNumberValid } = useValidForm(refPhoneValue, 0, Infinity, 0, 0, 0);

//     useEffect(() => {
//         if (refName.current) {
//             setRefNameValue(refName.current.value);
//         }
//         if (refPhone.current) {
//             setRefPhoneValue(refPhone.current.value);
//         }
//     }, [refName.current?.value, refPhone.current?.value]);

//     const handleCheckboxChange = (e) => {
//         setIsChecked(e.target.checked);
//     };

//     const sentDataHandler = (e) => {
//         e.preventDefault();
//         const newErrors = [];

//         // if (!isNameNotEmpty) {
//         //     newErrors.push("Укажите имя");
//         // }

//         if (!isPhoneNumberValid) {
//             newErrors.push("Укажите номер телефона");
//         }

//         if (!isChecked) {
//             newErrors.push("Вы должны согласиться с политикой конфиденциальности");
//         }

//         if (newErrors.length > 0) {
//             setErrors(newErrors);
//             setSuccessMessage("");
//         } else {
//             setErrors([]);
//             setSuccessMessage("Ожидайте, мы вам перезвоним");
//             console.log(`Имя: ${refNameValue}, Номер телефона: ${refPhoneValue}`);
//             sentDataToTelegramHandler();
//         }
//     };

//     const { data } = useHttp("https://autobox18-ba317-default-rtdb.firebaseio.com/BotToken.json", { method: "GET" });

//     const sentDataToTelegramHandler = async () => {
//         if (!data) {
//             setErrorStateForTg(true);
//             return;
//         }

//         const botToken = data.Token;
//         const chatId = data.ChatId;
//         const url = `${data.UrlPart1}${botToken}${data.UrlPart2}`;

//         const text = `
//         <b>У вас новая запись, перезвоните:</b>\n\n
//         <b>Имя:</b> ${refNameValue || 'Не указано'}\n
//         <b>Номер телефона:</b> <a href="tel:${refPhoneValue}">${refPhoneValue}</a>
//         `;

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     chat_id: chatId,
//                     text: text,
//                     parse_mode: 'HTML',
//                 }),
//             });

//             if (!response.ok) {
//                 setErrorStateForTg(true);
//             } else {
//                 setErrorStateForTg(false);
//             }
//         } catch (error) {
//             console.error('Ошибка при отправке сообщения в Telegram:', error);
//             setErrorStateForTg(true);
//         }
//     };

//     return (
//         <>
//             {errors.map((error, index) => (
//                 <ErrorPopup key={index} timeOut="5000" message={error} />
//             ))}

//             {errorStateForTg && <ErrorPopup timeOut="5000" message="Произошла какая-то ошибка при отправке данных" />}
//             {errorStateForTg === false && <SuccessPopup timeOut="5000" message={successMessage} />}

//             <form className={styles.form} style={{ display: display }} onSubmit={sentDataHandler}>
//                 <input
//                     placeholder="ВВЕДИТЕ ИМЯ"
//                     type="text"
//                     name="text"
//                     className="input"
//                     ref={refName}
//                     onChange={() => setRefNameValue(refName.current.value)}
//                     value={refNameValue}
//                 />

//                 <input
//                     placeholder="ВВЕДИТЕ НОМЕР ТЕЛЕФОНА *"
//                     type="text"
//                     name="number"
//                     className="input"
//                     ref={refPhone}
//                     onChange={() => setRefPhoneValue(refPhone.current.value)}
//                     value={refPhoneValue}
//                 />

//                 <div className={styles.privacyContainer}>
//                     <input
//                         type="checkbox"
//                         id="privacy"
//                         checked={isChecked}
//                         onChange={handleCheckboxChange}
//                     />
//                     <label htmlFor="privacy" className={styles.privacyText}>
//                         согласен с <Link to="/privacy-policy">
//                             <span className={styles.spanColor}>политикой конфиденциальности *</span>
//                         </Link>
//                     </label>
//                 </div>

//                 <button type="submit" className={styles.submitButton}>
//                     <span className='textWhiteSmall'>ОТПРАВИТЬ ЗАЯВКУ</span>
//                 </button>
//             </form>
//         </>
//     );
// };

// export default FormForCall;

import { Link } from "react-router-dom";
import styles from "./FormForCall.module.css";
import { useRef, useState, useEffect } from "react";
import ErrorPopup from "../ErrorGroup/ErrorPopup";
import SuccessPopup from "../ErrorGroup/SuccessPopup";
import useValidForm from "../../../Hooks/useValidForm";
import useHttp from "../../../Hooks/useHttp";

const FormForCall = ({ display }) => {
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [errorStateForTg, setErrorStateForTg] = useState(undefined);

    const refName = useRef();
    const refPhone = useRef();

    const [refNameValue, setRefNameValue] = useState("");
    const [refPhoneValue, setRefPhoneValue] = useState("");

    const { notEmpty: isNameNotEmpty, correctPhoneNumber: isPhoneNumberValid } = useValidForm(refPhoneValue, 0, Infinity, 0, 0, 0);

    useEffect(() => {
        if (refName.current) {
            setRefNameValue(refName.current.value);
        }
        if (refPhone.current) {
            setRefPhoneValue(refPhone.current.value);
        }
    }, [refName.current?.value, refPhone.current?.value]);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const sentDataHandler = (e) => {
        e.preventDefault();
        const newErrors = [];

        if (!isPhoneNumberValid) {
            newErrors.push("Укажите номер телефона");
        }

        if (!isChecked) {
            newErrors.push("Вы должны согласиться с политикой конфиденциальности");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            setSuccessMessage("");
        } else {
            setErrors([]);
            setSuccessMessage("Ожидайте, мы вам перезвоним");
            console.log(`Имя: ${refNameValue}, Номер телефона: ${refPhoneValue}`);
            sentDataToTelegramHandler();
        }
    };

    const { data } = useHttp("https://autobox18-ba317-default-rtdb.firebaseio.com/BotToken.json", { method: "GET" });

    const sentDataToTelegramHandler = async () => {
        if (!data) {
            setErrorStateForTg(true);
            return;
        }

        const botToken = data.Token;
        const chatId = data.ChatId;
        const url = `${data.UrlPart1}${botToken}${data.UrlPart2}`;

        const text = `
        <b>У вас новая запись, перезвоните:</b>\n\n
        <b>Имя:</b> ${refNameValue || 'Не указано'}\n
        <b>Номер телефона:</b> <a href="tel:${refPhoneValue || 'Не указан'}">${refPhoneValue || 'Не указан'}</a>
        `;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'HTML',
                }),
            });

            if (!response.ok) {
                setErrorStateForTg(true);
            } else {
                setErrorStateForTg(false);
            }
        } catch (error) {
            console.error('Ошибка при отправке сообщения в Telegram:', error);
            setErrorStateForTg(true);
        }
    };

    return (
        <>
            {errors.map((error, index) => (
                <ErrorPopup key={index} timeOut="5000" message={error} />
            ))}

            {errorStateForTg && <ErrorPopup timeOut="5000" message="Произошла какая-то ошибка при отправке данных" />}
            {errorStateForTg === false && <SuccessPopup timeOut="5000" message={successMessage} />}

            <form className={styles.form} style={{ display: display }} onSubmit={sentDataHandler}>
                <input
                    placeholder="ВВЕДИТЕ ИМЯ"
                    type="text"
                    name="text"
                    className="input"
                    ref={refName}
                    onChange={() => setRefNameValue(refName.current.value)}
                    value={refNameValue}
                />

                <input
                    placeholder="ВВЕДИТЕ НОМЕР ТЕЛЕФОНА *"
                    type="number"
                    name="number"
                    className="input"
                    ref={refPhone}
                    onChange={() => setRefPhoneValue(refPhone.current.value)}
                    value={refPhoneValue}
                />

                <div className={styles.privacyContainer}>
                    <input
                        type="checkbox"
                        id="privacy"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="privacy" className={styles.privacyText}>
                        согласен с <Link to="/privacyPolicy">
                            <span className={styles.spanColor}>политикой конфиденциальности *</span>
                        </Link>
                    </label>
                </div>

                <button 
                type="submit" 
                className={styles.submitButton} 
                disabled={errorStateForTg === false} 
                style={{
                    backgroundColor: errorStateForTg === false ? "red" : "",
                    cursor: errorStateForTg === false ? "not-allowed" : ""
                }}>
                    <span className='textWhiteSmall'>ОТПРАВИТЬ ЗАЯВКУ</span>
                </button>
            </form>
        </>
    );
};

export default FormForCall;

