import React from "react";
import BackgroundImgContainer from "../Components/UI/Background Img container/BackgroundImgContainer";
import MainImgForContacts from "../Images/ImportantImages/Контакты.png";
import HeaderUpper from "../Components/UI/Header/HeaderUpper";
import Header from "../Components/UI/Header/Header";
import HeavyText from "../Components/UI/Text/HeavyText";
import HeavyTextGray from "../Components/UI/Text/HeavyTextGray";
import Footer from "../Components/UI/Footer/Footer";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            <header>
                <BackgroundImgContainer url={MainImgForContacts} height="65vh">

                    <HeaderUpper />
                    <Header />

                    <div className="centered" style={{ height: "60%" }}>
                        <HeavyText className="centered" fontSize="50px" text="КОНТАКТЫ" />
                    </div>

                </BackgroundImgContainer>
            </header>

            <main>
                <div>
                    <div className="centered">
                        <HeavyTextGray text="ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className={styles.containerFromAutoBox}>

                        <div className={styles.containerFromAutoBoxWidth}>
                            <div>
                                <HeavyTextGray
                                    text='1. Общие положения'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

                                <HeavyTextGray
                                    text='1.1. Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты информации о физических лицах (далее — Пользователи), использующих услуги и информацию, размещенные на сайте автосервиса "Автобокс18" (далее — Сайт).'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

                                <HeavyTextGray
                                    text='1.2. Целью настоящей Политики является обеспечение надлежащей защиты информации о Пользователях, включая их персональные данные, от несанкционированного доступа и разглашения.'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

                                <HeavyTextGray
                                    text='1.3. Отношения, связанные с обработкой персональных данных, регулируются настоящей Политикой, а также действующим законодательством Российской Федерации в области защиты персональных данных.'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

                                <HeavyTextGray
                                    text='1.4. Использование Сайта означает согласие Пользователя с настоящей Политикой и условиями обработки его персональных данных.'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

                                <HeavyTextGray
                                    text='2. Сбор и использование персональных данных'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

                                <HeavyTextGray
                                    text='2.1. Под персональными данными понимается любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

                                <HeavyTextGray
                                    text='2.2. Персональные данные Пользователей включают в себя, но не ограничиваются следующей информацией:
Фамилия, имя, отчество;
Контактный телефон;
Адрес электронной почты;
Почтовый адрес.'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

<HeavyTextGray
                                    text='2.3. Персональные данные собираются исключительно с согласия. '
                                    margin="20px" color="#514F4F"
                                    fontSize="" />

<HeavyTextGray
                                    text='2.4. Персональные данные Пользователей используются для следующих целей:
Предоставление услуг автосервиса;
Обработка заказов Пользователей и выполнение обязательств перед Пользователями;
Улучшение качества обслуживания и доработки Сайта;
Информирование Пользователей о новостях, акциях и специальных предложениях.'
                                    margin="20px" color="#514F4F"
                                    fontSize="" />






                            </div>

                        </div>

                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    )
}

export default PrivacyPolicy;