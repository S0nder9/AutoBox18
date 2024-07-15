// import { useState, useEffect } from "react";

// const useValidForm = (valueVariable, minLen = 0, maxLen = Infinity, minUpper = 0, minLower = 0, minDigits = 0) => {
//   // Проверка на пустую строку
//   const [notEmpty, setNotEmpty] = useState(false);

//   // Проверка номера телефона
//   const [correctPhoneNumber, setCorrectPhoneNumber] = useState(false);

//   // Проверка email
//   const [correctEmail, setCorrectEmail] = useState(false);

//   // Проверка на наличие заглавных букв
//   const [hasEnoughUpperCase, setHasEnoughUpperCase] = useState(false);

//   // Проверка на наличие строчных букв
//   const [hasEnoughLowerCase, setHasEnoughLowerCase] = useState(false);

//   // Проверка на наличие специального символа
//   const [hasSpecialChar, setHasSpecialChar] = useState(false);

//   // Проверка на минимальную длину строки
//   const [minLength, setMinLength] = useState(false);

//   // Проверка на максимальную длину строки
//   const [maxLength, setMaxLength] = useState(false);

//   // Проверка на наличие цифр
//   const [hasEnoughDigits, setHasEnoughDigits] = useState(false);

//   useEffect(() => {
//     const trimmedValue = valueVariable.trim();

//     // Проверка на пустую строку
//     setNotEmpty(trimmedValue.length > 0);

//     // Проверка номера телефона (должен содержать цифры)
//     const phoneNumberPattern = /\d/;
//     setCorrectPhoneNumber(phoneNumberPattern.test(trimmedValue));

//     // Проверка email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     setCorrectEmail(emailPattern.test(trimmedValue));

//     // Проверка на наличие заглавных букв
//     const upperCaseCount = (trimmedValue.match(/[A-Z]/g) || []).length;
//     setHasEnoughUpperCase(upperCaseCount >= minUpper);

//     // Проверка на наличие строчных букв
//     const lowerCaseCount = (trimmedValue.match(/[a-z]/g) || []).length;
//     setHasEnoughLowerCase(lowerCaseCount >= minLower);

//     // Проверка на наличие специального символа
//     const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
//     setHasSpecialChar(specialCharPattern.test(trimmedValue));

//     // Проверка на минимальную длину строки
//     setMinLength(trimmedValue.length >= minLen);

//     // Проверка на максимальную длину строки
//     setMaxLength(trimmedValue.length <= maxLen);

//     // Проверка на наличие цифр
//     const digitCount = (trimmedValue.match(/\d/g) || []).length;
//     setHasEnoughDigits(digitCount >= minDigits);

//   }, [valueVariable, minLen, maxLen, minUpper, minLower, minDigits]);

//   return {
//     notEmpty,
//     correctPhoneNumber,
//     correctEmail,
//     hasEnoughUpperCase,
//     hasEnoughLowerCase,
//     hasSpecialChar,
//     minLength,
//     maxLength,
//     hasEnoughDigits
//   };
// };

// export default useValidForm;


import { useState, useEffect } from "react";

const useValidForm = (valueVariable, minLen = 0, maxLen = Infinity, minUpper = 0, minLower = 0, minDigits = 0) => {
    const [notEmpty, setNotEmpty] = useState(false);
    const [correctPhoneNumber, setCorrectPhoneNumber] = useState(false);
    const [correctEmail, setCorrectEmail] = useState(false);
    const [hasEnoughUpperCase, setHasEnoughUpperCase] = useState(false);
    const [hasEnoughLowerCase, setHasEnoughLowerCase] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [hasEnoughDigits, setHasEnoughDigits] = useState(false);

    useEffect(() => {
        const trimmedValue = valueVariable.trim();
        setNotEmpty(trimmedValue.length > 0);
        const phoneNumberPattern = /^\d+$/;
        setCorrectPhoneNumber(phoneNumberPattern.test(trimmedValue));
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setCorrectEmail(emailPattern.test(trimmedValue));
        const upperCaseCount = (trimmedValue.match(/[A-Z]/g) || []).length;
        setHasEnoughUpperCase(upperCaseCount >= minUpper);
        const lowerCaseCount = (trimmedValue.match(/[a-z]/g) || []).length;
        setHasEnoughLowerCase(lowerCaseCount >= minLower);
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        setHasSpecialChar(specialCharPattern.test(trimmedValue));
        setMinLength(trimmedValue.length >= minLen);
        setMaxLength(trimmedValue.length <= maxLen);
        const digitCount = (trimmedValue.match(/\d/g) || []).length;
        setHasEnoughDigits(digitCount >= minDigits);
    }, [valueVariable, minLen, maxLen, minUpper, minLower, minDigits]);

    return {
        notEmpty,
        correctPhoneNumber,
        correctEmail,
        hasEnoughUpperCase,
        hasEnoughLowerCase,
        hasSpecialChar,
        minLength,
        maxLength,
        hasEnoughDigits
    };
};

export default useValidForm;
