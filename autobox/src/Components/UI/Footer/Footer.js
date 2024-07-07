import SocialIcons from "../../Icons/SocialIcons";
import Enrol from "../Buttons/Enrol";
import styles from "./Footer.module.css";
import Line from "../Line/Line"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useExchangeBuffer from "../../../Hooks/useExchangeBuffer";
import SuccessPopup from "../ErrorGroup/SuccessPopup";
import ErrorPopup from "../ErrorGroup/ErrorPopup";

const Footer = () => {
    const { handleCopy, textSuccess, textError, forPopupState } = useExchangeBuffer();

    return (
        <>
            {forPopupState && <SuccessPopup message={textSuccess} timeOut="5000" />}
            {forPopupState === false && <ErrorPopup message={textError} timeOut="5000" />}

            <div className={styles.entry}>
                <Enrol text="ЗАПИСЬ ОНЛАЙН" />
                <Enrol text="НАПИСАТЬ" />
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.firstContainerForFooter}>
                    <Link to="/main"><p className="textWhiteBig">АВТОБОКС18</p></Link>
                    <br />
                    <SocialIcons justifyContent="space-around" />
                </div>

                <div className={styles.secondContainerForFooter}>
                    <p className="textWhiteBig">МЕНЮ НАВИГАЦИИ</p>
                    <br />
                    <Link to="/pricesAndServices">
                        <div className={styles.crossWhithText}>
                            <box-icon name='x' color="#FF5C00" />
                            <p className="textWhiteSmall">ЦЕНЫ И УСЛУГИ</p>
                        </div>
                    </Link>
                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color="#FF5C00" />
                        <p className="textWhiteSmall">ЗАПЧАСТИ</p>
                    </div>
                    <Link to="/contacts">
                        <div className={styles.crossWhithText}>
                            <box-icon name='x' color="#FF5C00" />
                            <p className="textWhiteSmall">КОНТАКТЫ</p>
                        </div>
                    </Link>
                </div>

                <div className={styles.thirdContainerForFooter}>
                    <p className="textWhiteBig">МЕНЮ НАВИГАЦИИ</p>
                    <br />
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name='x' color="#FF5C00" />
                        <p className="textWhiteSmall">АДРЕС: г. Ижевск, ул. Автосервисная, д. 18</p>
                    </div>
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name='x' color="#FF5C00" />
                        <p className="textWhiteSmall">ТЕЛЕФОН: +7 (3412) 123-456</p>
                    </div>
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name='x' color="#FF5C00" />
                        <p className="textWhiteSmall">Время работы: Пн-Пт: 9:00 - 18:00, Сб-Вс: выходные</p>
                    </div>
                    <div className={styles.crossWhithText} onClick={handleCopy}>
                        <box-icon name='x' color="#FF5C00" />
                        <p className="textWhiteSmall">ПОЧТА: info@autobox18.ru</p>
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
