import React from "react";
import styles from "./HeaderUpper.module.css";
import SocialIcons from "../../Icons/SocialIcons";
import useExchangeBuffer from "../../../Hooks/useExchangeBuffer";
import SuccessPopup from "../ErrorGroup/SuccessPopup";
import ErrorPopup from "../ErrorGroup/ErrorPopup";

const HeaderUpper = () => {
  const { handleCopy, textSuccess, textError, forPopupState } = useExchangeBuffer();

  return (
    <div className="centered">
      {forPopupState && <SuccessPopup message={textSuccess} timeOut="5000" />}
      {forPopupState === false && <ErrorPopup message={textError} timeOut="5000" />}

      <div className={styles.headerContainer}>
        <p className="textWhiteSmall" onClick={handleCopy}>8(3412)56-76-15</p>
        <p className="textWhiteSmall" onClick={handleCopy}>Маяковского, 11</p>
        <p className="textWhiteSmall" onClick={handleCopy}>Пн-Пт - с 9:00 до 19:00</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default HeaderUpper;
