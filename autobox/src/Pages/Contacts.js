import React from "react";
import BackgroundImgContainer from "../Components/UI/Background Img container/BackgroundImgContainer";
import MainImgForContacts from "../Images/ImportantImages/Фото местоположения сервиса.jpg";
import HeaderUpper from "../Components/UI/Header/HeaderUpper";
import Header from "../Components/UI/Header/Header";
import HeavyText from "../Components/UI/Text/HeavyText";
import HeavyTextGray from "../Components/UI/Text/HeavyTextGray";
import Footer from "../Components/UI/Footer/Footer";
import styles from "./Contacts.module.css"
import useLeafletMap from "../Hooks/useLeafletMap";
// import logoIcon from "../Images/ImportantImages/LogoOrange.png";

const Contacts = () => {
    const center = [56.828478, 53.200163];
    const zoom = 13;
    const height = "600px";
    const width = "80%";
    // const iconUrl = logoIcon;

    const markers = [
        {
            position: center,
            popup: 'Маяковского, 11. Автобокс 18'
        }
    ];

    const LeafletMap = useLeafletMap(center, zoom, height, width, markers);

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
                        <HeavyTextGray text="КОНТАКТЫ" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className={styles.containerFromAutoBox}>
                        <div className={styles.containerFromAutoBoxWidth}>
                            <HeavyTextGray text="Автосервис Автобокс18" margin="40px" color="#514F4F" fontSize="40px" />

                            <div className={styles.iconWhithText}>
                                <a href="tel:+83412567615">
                                    <box-icon type='solid' name='phone-call' color='#FF5C00' size='32px' />
                                </a>
                                <HeavyText fontSize="28px" text="8(3412)56-76-15" color="#514F4F" />
                            </div>

                            <div className={styles.iconWhithText}>
                                <a href="https://www.google.com/maps/place/Маяковского,+11"  target="_blank" rel="noopener noreferrer">
                                    <box-icon name='location-plus' type='solid' color='#FF5C00' size='32px' />
                                </a>
                                <HeavyText fontSize="28px" text="Маяковского, 11" color="#514F4F" />
                            </div>

                            <div className={styles.iconWhithText}>    
                            <box-icon type='solid' name='time' color='#FF5C00' size='32px'></box-icon>
                                <HeavyText fontSize="28px" text="Пн-Пт - 9:00 до 19: 00" color="#514F4F" />
                            </div>

                            <div className={styles.iconWhithText}>
                                <a href="mailto:your-email@example.com" >
                                    <box-icon name='envelope' type='solid' color='#FF5C00' size='32px' />
                                </a>
                                <HeavyText fontSize="28px" text="your-email@example.com" color="#514F4F" />
                            </div>
                        </div>
                    </div>

                    <div className="centered">
                        <HeavyTextGray text="ГДЕ МЫ НАХОДИТМСЯ" margin="40px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className="centered">
                        {LeafletMap}
                    </div>

                    <div className="centered">
                        <HeavyTextGray text="О НАС" margin="40px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className={styles.containerFromAutoBox}>
                        <div className={styles.containerFromAutoBoxWidth}>
                        <HeavyTextGray text='Добро пожаловать в автосервис "Автобокс18" в Ижевске!' margin="40px" color="#514F4F" fontSize="25px" />

                        <HeavyTextGray 
                        text='Мы – команда профессионалов, посвятившая свою жизнь автомобилям и их обслуживанию.
                         Наш автосервис предоставляет широкий спектр услуг,
                          начиная от базовой диагностики и заканчивая сложным ремонтом двигателей и кузовным ремонтом.
                           Мы гордимся тем, что предлагаем нашим клиентам высококачественные услуги по разумным ценам.' margin="20px" color="#514F4F" fontSize="23px" />
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

export default Contacts;