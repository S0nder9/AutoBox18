import SocialIcons from "../../Icons/SocialIcons";
import Enrol from "../Buttons/Enrol";
import styles from "./Footer.module.css";
import Line from "../Line/Line";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useExchangeBuffer from "../../../Hooks/useExchangeBuffer";
import SuccessPopup from "../ErrorGroup/SuccessPopup";
import ErrorPopup from "../ErrorGroup/ErrorPopup";
import obj_with_constants from "../../../Helper/constants";

const Footer = () => {
    const { handleCopy, textSuccess, textError, forPopupState } =
        useExchangeBuffer();

    return (
        <>
            {forPopupState && (
                <SuccessPopup message={textSuccess} timeOut="5000" />
            )}
            {forPopupState === false && (
                <ErrorPopup message={textError} timeOut="5000" />
            )}

            <div className={styles.entry}>
                <Enrol text="ЗАПИСЬ ОНЛАЙН" />
                <Enrol text="НАПИСАТЬ" />
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.firstContainerForFooter}>
                    <Link to="/main">
                        <p className="textWhiteBig">АВТОБОКС18</p>
                    </Link>
                    <br />
                    <SocialIcons justifyContent="space-around" />
                </div>

                <div className={styles.secondContainerForFooter}>
                    <p className="textWhiteBig">МЕНЮ НАВИГАЦИИ</p>
                    <br />
                    <Link to="/pricesAndServices">
                        <div className={styles.crossWhithText}>
                            <box-icon name="x" color="#FF5C00" />
                            <p className="textWhiteSmall">ЦЕНЫ И УСЛУГИ</p>
                        </div>
                    </Link>
                    <div className={styles.crossWhithText}>
                        <box-icon name="x" color="#FF5C00" />
                        <p className="textWhiteSmall">ЗАПЧАСТИ</p>
                    </div>
                    <Link to="/contacts">
                        <div className={styles.crossWhithText}>
                            <box-icon name="x" color="#FF5C00" />
                            <p className="textWhiteSmall">КОНТАКТЫ</p>
                        </div>
                    </Link>
                </div>

                <div className={styles.thirdContainerForFooter}>
                    <p className="textWhiteBig" style={{ textAlign: "center" }}>
                        ИНФОРМАЦИЯ
                    </p>
                    <br />
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name="x" color="#FF5C00" />
                        <p className="textWhiteSmall">{`АДРЕС: ${obj_with_constants.ADDRESS}`}</p>
                    </div>
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name="x" color="#FF5C00" />
                        <p className="textWhiteSmall">{`ТЕЛЕФОН: ${obj_with_constants.PHONENUMBER1}, ${obj_with_constants.PHONENUMBER2}`}</p>
                    </div>
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name="x" color="#FF5C00" />
                        <p className="textWhiteSmall">{`ВРЕМЯ РАБОТЫ: ${obj_with_constants.SCHEDULE}`}</p>
                    </div>
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name="x" color="#FF5C00" />
                        <p className="textWhiteSmall">{`ПОЧТА: ${obj_with_constants.MAIL}`}</p>
                    </div>
                </div>

                <div className="centered" style={{ margin: "10px" }}>
                    <Line width="calc(100% - 20%)" height="2px" />
                </div>

                <div className="centered" style={{ margin: "10px" }}>
                    <p className="textWhiteSmall">
                        © 2024 Автобокс18. Все права защищены.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
