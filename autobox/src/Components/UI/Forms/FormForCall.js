// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import styles from "./FormForCall.module.css";
// import { useRef, useState } from "react";
// import ErrorPopup from "../ErrorGroup/ErrorPopup";
// import useValidForm from "../../../Hooks/useValidForm";

// const FormForCall = ({ display }) => {
//     const [sentName, setSentName] = useState();
//     const [sentPhoneNumber, setSentPhoneNumber] = useState();
//     const [errorState, setErrorState] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [isChecked, setIsChecked] = useState(false);

//     const refName = useRef();
//     const refPhone = useRef();

//     const sentDatahandler = (e) => {
//         e.preventDefault();

//         const refNameValue = refName.current.value;
//         const refPhoneValue = refPhone.current.value;

//         const notEmpty = useValidForm(refNameValue);
//         const correctPhoneNumber = useValidForm(refPhoneValue);

//         // Имя
//         if (!notEmpty) {
//             setSentName("Пользователь не указал имя");
//         } else {
//             setSentName(refNameValue);
//         }

//         // Номер телефона
//         if (!correctPhoneNumber) {
//             setErrorState(true);
//             setErrorMessage("Укажите номер телефона");
//             return;
//         } else {
//             setErrorState(false);
//             setErrorMessage("");
//             setSentPhoneNumber(refPhoneValue);
//         }

//         // Чек-бокс
//         if (!correctPhoneNumber) {
//             setErrorState(true);
//             setIsChecked(false);
//         } else {
//             setErrorState(false);
//             setIsChecked(true);
//         }

//         if (errorState) {
//             console.log("Введены не все данные");
//             return;
//         } else {
//             console.log(`${sentName} ${sentPhoneNumber}`);
//         }
//     };

//     return (
//         <>
//             {errorState && <ErrorPopup timeOut="5000" message={errorMessage} />}
//             <form className={styles.form} style={{ display: display }} onSubmit={sentDatahandler}>
//                 <input
//                     placeholder="ВВЕДИТЕ ИМЯ"
//                     type="text"
//                     name="text"
//                     className="input"
//                     ref={refName}
//                 />

//                 <input
//                     placeholder="ВВЕДИТЕ НОМЕР ТЕЛЕФОНА *"
//                     type="number"
//                     name="number"
//                     className="input"
//                     ref={refPhone}
//                 />

//                 <div className={styles.privacyContainer}>
//                     <input
//                         type="checkbox"
//                         id="privacy"
//                         checked={isChecked}
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
import Loading from "../LoadingGroup/Loading";

const FormForCall = ({ display }) => {
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const refName = useRef();
    const refPhone = useRef();

    const [refNameValue, setRefNameValue] = useState("");
    const [refPhoneValue, setRefPhoneValue] = useState("");

    // Хук для получения данных из Firebase
    const { data, loader, error } = useHttp("https://autobox18-ba317-default-rtdb.firebaseio.com/BotToken.json", {
        method: "GET"
    });

    const { notEmpty: isNameNotEmpty, correctPhoneNumber: isPhoneNumberValid } = useValidForm(refPhoneValue, 0, Infinity, 0, 0, 0);

    useEffect(() => {
        if (refName.current) {
            setRefNameValue(refName.current.value);
        }
        if (refPhone.current) {
            setRefPhoneValue(refPhone.current.value);
        }
    }, [refName.current?.value, refPhone.current?.value]);

    // Обработчик изменения состояния чекбокса
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    // Проверяем данные и отправляем сообщение
    const sentDataHandler = async (e) => {
        e.preventDefault();
        const newErrors = [];

        if (!isNameNotEmpty) {
            newErrors.push("Укажите имя");
        }

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
            // Извлечение Token и ChatId из data
            const token = data?.Token?.split('/')[4];  // Извлечение Token из URL
            const chatId = data?.ChatId;  // Прямое использование числового ChatId

            if (token && chatId) {
                await sendTelegramMessage(token, chatId, refNameValue, refPhoneValue);
            } else {
                console.error('Token или ChatId отсутствуют');
            }
        }
    };

    // Функция отправки сообщения в Telegram
    const sendTelegramMessage = async (botToken, chatId, sentName, sentPhoneNumber) => {
        const text = `
        <b>У вас новая запись, перезвоните:</b>\n\n
        <b>Имя:</b> ${sentName || 'Не указано'}\n
        <b>Номер телефона:</b> ${sentPhoneNumber || 'Не указан'}
        `;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,  // Убедитесь, что chatId это только число
                text: text,
                parse_mode: 'HTML',
            }),
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            if (!result.ok) {
                throw new Error(result.description || 'Failed to send message');
            }
            console.log('Message sent successfully');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    if (loader) return <div className="centered"><Loading/></div>;
    if (error) return <ErrorPopup timeOut="5000" message={error} />;

    return (
        <>
            {errors.map((error, index) => (
                <ErrorPopup key={index} timeOut="5000" message={error} />
            ))}
            {successMessage && <SuccessPopup timeOut="5000" message={successMessage} />}
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
                    type="text"
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
