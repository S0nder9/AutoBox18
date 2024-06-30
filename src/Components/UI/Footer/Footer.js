import { Helmet } from "react-helmet";
import SocialIcons from "../../Icons/SocialIcons";
import Enrol from "../Buttons/Enrol";
import styles from "./Footer.module.css";
import Line from "../Line/Line"

const Footer = () => {
    return (
        <>
          {/* <Helmet>
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        </Helmet> */}

        <div className={styles.entry}>
            <Enrol text = "ЗАПИСЬ ОНЛАЙН"/>
            <Enrol text = "НАПИСАТЬ"/>

        </div>
            <div className={styles.footerContainer}>
                <div className={styles.firstContainerForFooter}>
                    <p className="textWhiteBig">АВТОБОКС18</p>
                    <br/>
                    <SocialIcons justifyContent = "space-around"/>
                </div>
                
                <div className={styles.secondContainerForFooter}>
                    <p className="textWhiteBig">МЕНЮ НАВИГАЦИИ</p>

                    <br/>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">ЦЕНЫ И УСЛУГИ</p>    
                    </div>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">ЗАПЧАСТИ</p>    
                    </div>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">КОНТАКТЫ</p>    
                    </div>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">ЗАПИСАТЬСЯ</p>    
                    </div>
                </div>
                
                <div className={styles.thirdContainerForFooter}>
                   <p className="textWhiteBig">МЕНЮ НАВИГАЦИИ</p>

                    <br/>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">АДРЕС: г. Ижевск, ул. Автосервисная, д. 18</p>    
                    </div>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">ТЕЛЕФОН: +7 (3412) 123-456</p>    
                    </div>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">Время работы: Пн-Пт: 9:00 - 18:00, Сб-Вс: выходные</p>    
                    </div>

                    <div className={styles.crossWhithText}>
                        <box-icon name='x' color = "#FF5C00"/>
                        <p className="textWhiteSmall">ПОЧТА: info@autobox18.ru</p>    
                    </div>
                </div>

                <div className="centered" style={{margin: "10px"}}>
                    <Line width = "calc(100% - 20%)" height = "2px"/>

                </div>

                 <div className="centered" style={{margin: "10px"}}>
                    <p className="textWhiteSmall">
                        © 2024 Автобокс18. Все права защищены.
                    </p>
                    
                </div>
                

            </div>
        </>
    )
}

export default Footer;