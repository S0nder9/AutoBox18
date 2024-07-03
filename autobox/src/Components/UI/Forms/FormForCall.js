// import { Link } from "react-router-dom";
// import styles from "./FormForCall.module.css";
// import { useRef, useState, useEffect } from "react";
// import ErrorPopup from "../ErrorGroup/ErrorPopup";
// import SuccessPopup from "../ErrorGroup/SuccessPopup";
// import useValidForm from "../../../Hooks/useValidForm";

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

//     // Обработчик изменения состояния чекбокса
//     const handleCheckboxChange = (e) => {
//         setIsChecked(e.target.checked);
//     };

//     // Проверяем данные и отправляем сообщение
//     const sentDataHandler = (e) => {
//         e.preventDefault();
//         const newErrors = [];

//         if (!isNameNotEmpty) {
//             newErrors.push("Укажите имя");
//         }

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

//     const sentDataToTelegramHandler = async () => {
//         const botToken = '7442718434:AAGyH4vpMGhtYcmMkQJA506EnH6KpM0A6zY';
//         const chatId = '1345888410';
//         const text = `
//         <b>У вас новая запись, перезвоните:</b>\n\n
//         <b>Имя:</b> ${refNameValue || 'Не указано'}\n
//         <b>Номер телефона:</b> ${refPhoneValue || 'Не указан'}
//         `;
//         const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      
//         try {
//           const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 chat_id: chatId,
//                 text: text,
//                 parse_mode: 'HTML',
//             }),
//           });
      
//           if (!response.ok) {
//             setErrorStateForTg(true);
//           } else {
//             setErrorStateForTg(false);
//           }
//         } catch (error) {
//           console.error('Ошибка при отправке сообщения в Telegram:', error);
//           setErrorStateForTg(true);
//         }
//       };
      

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
            sentDataToTelegramHandler();
        }
    };

    const { data } = useHttp("https://autobox18-ba317-default-rtdb.firebaseio.com/BotToken.json", {method: "GET"});

    const sentDataToTelegramHandler = async () => {
        if (!data) return setErrorStateForTg(true);

        const botToken = data.Token;
        const chatId = data.ChatId;
        const url = `${data.UrlPart1}${botToken}${data.UrlPart2}`;

        const text = `
        <b>У вас новая запись, перезвоните:</b>\n\n
        <b>Имя:</b> ${refNameValue || 'Не указано'}\n
        <b>Номер телефона:</b> ${refPhoneValue || 'Не указан'}
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

















// import { Link } from "react-router-dom";
// import styles from "./FormForCall.module.css";
// import { useRef, useState, useEffect } from "react";
// import ErrorPopup from "../ErrorGroup/ErrorPopup";
// import SuccessPopup from "../ErrorGroup/SuccessPopup";
// import useValidForm from "../../../Hooks/useValidForm"
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

//     // Обработчик изменения состояния чекбокса
//     const handleCheckboxChange = (e) => {
//         setIsChecked(e.target.checked);
//     };

//     // Проверяем данные и отправляем сообщение
//     const sentDataHandler = (e) => {
//         e.preventDefault();
//         const newErrors = [];

//         if (!isNameNotEmpty) {
//             newErrors.push("Укажите имя");
//         }

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

//     const { data } = useHttp("https://autobox18-ba317-default-rtdb.firebaseio.com/BotToken.json", {method: "GET"});
//     const botToken = data.Token;
//     const chatId = data.ChatId;
//     const url = `${data.UrlPart1}${botToken}${data.UrlPart2}`;

//     const sentDataToTelegramHandler = async () => {
        
        
//         const text = `
//         <b>У вас новая запись, перезвоните:</b>\n\n
//         <b>Имя:</b> ${refNameValue || 'Не указано'}\n
//         <b>Номер телефона:</b> <a href="tel:${refPhoneValue}">${refPhoneValue || 'Не указан'}</a>
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
//                     reply_markup: {
//                         inline_keyboard: [[
//                             {
//                                 text: 'Отметить',
//                                 callback_data: 'mark'
//                             }
//                         ]]
//                     }
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

//     useEffect(() => {
//         const handleTelegramCallback = async (update) => {
//             if (update.callback_query && update.callback_query.data === 'mark') {
//                 const message_id = update.callback_query.message.message_id;
//                 const chat_id = update.callback_query.message.chat.id;

//                 const url = `https://api.telegram.org/bot${botToken}/editMessageText`;
//                 const text = `<b>У вас новая запись, перезвоните:</b>\n\n
//                 <b>Имя:</b> ${refNameValue || 'Не указано'}\n
//                 <b>Номер телефона:</b> <a href="tel:${refPhoneValue}">${refPhoneValue || 'Не указан'}</a>\n\n
//                 <span style="color:green;">Отмечено</span>`;

//                 try {
//                     await fetch(url, {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({
//                             chat_id: chat_id,
//                             message_id: message_id,
//                             text: text,
//                             parse_mode: 'HTML'
//                         })
//                     });
//                 } catch (error) {
//                     console.error('Ошибка при обновлении сообщения в Telegram:', error);
//                 }
//             }
//         };

//         const url = `https://api.telegram.org/bot${botToken}/getUpdates`;
//         const intervalId = setInterval(async () => {
//             try {
//                 const response = await fetch(url);
//                 const updates = await response.json();
//                 if (updates.result.length > 0) {
//                     updates.result.forEach(handleTelegramCallback);
//                 }
//             } catch (error) {
//                 console.error('Ошибка при получении обновлений из Telegram:', error);
//             }
//         }, 5000);

//         return () => clearInterval(intervalId);
//     }, []);

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
