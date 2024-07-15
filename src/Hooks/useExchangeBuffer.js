import { useState } from "react";

const useExchangeBuffer = () => {
    const [forPopupState, setForPopupState] = useState(undefined);
    const [textSuccess, setTextSuccess] = useState("");
    const [textError, setTextError] = useState("");

    const handleCopy = (e) => {
        const textToCopy = e.target.innerText;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setForPopupState(true);
                setTextSuccess("Текст успешно скопирован в буфер обмена");
                setTextError("");
                setTimeout(() => setForPopupState(undefined), 5000);
            })
            .catch((error) => {
                setForPopupState(false);
                setTextError(`Не удалось скопировать текст: ${error}`);
                setTextSuccess("");
                setTimeout(() => setForPopupState(undefined), 5000);
            });
    };

    return {
        handleCopy,
        textSuccess,
        textError,
        forPopupState
    };
}

export default useExchangeBuffer;
