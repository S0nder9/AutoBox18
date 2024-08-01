import React from "react";
import styles from "./HeaderUpper.module.css";
import SocialIcons from "../../Icons/SocialIcons";
import useExchangeBuffer from "../../../Hooks/useExchangeBuffer";
import SuccessPopup from "../ErrorGroup/SuccessPopup";
import ErrorPopup from "../ErrorGroup/ErrorPopup";
import obj_with_constants from "../../../Helper/constants";

const HeaderUpper = () => {
  const { handleCopy, textSuccess, textError, forPopupState } = useExchangeBuffer();

  return (
    <div className="centered">
      {forPopupState && <SuccessPopup message={textSuccess} timeOut="5000" />}
      {forPopupState === false && <ErrorPopup message={textError} timeOut="5000" />}

      <div className={styles.headerContainer}>
        <p className="textWhiteSmall" onClick={handleCopy}>{`${obj_with_constants.PHONENUMBER1}, ${obj_with_constants.PHONENUMBER2}`}</p>
        <p className="textWhiteSmall" onClick={handleCopy}>{obj_with_constants.ADDRESS}</p>
        <p className="textWhiteSmall" onClick={handleCopy}>{obj_with_constants.SCHEDULE}</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default HeaderUpper;
