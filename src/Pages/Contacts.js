import React from "react";
import BackgroundImgContainer from "../Components/UI/Background Img container/BackgroundImgContainer";
import MainImgForContacts from "../Images/ImportantImages/Контакты.png";
import HeaderUpper from "../Components/UI/Header/HeaderUpper";
import Header from "../Components/UI/Header/Header";
import HeavyText from "../Components/UI/Text/HeavyText";
import HeavyTextGray from "../Components/UI/Text/HeavyTextGray";
import Footer from "../Components/UI/Footer/Footer";
import styles from "./Contacts.module.css"
import useLeafletMap from "../Hooks/useLeafletMap";
import logoIcon from "../Images/ImportantImages/LogoOrange.png";
import useAnim from "../Animations/useAnim";

const Contacts = () => {
    const center = [56.828478, 53.200163];
    const zoom = 13;
    const height = "50vh";
    const width = "90%";
    const imageUrl = logoIcon;

    const markers = [
        {
            position: center,
            popup: 'Маяковского, 11. Автобокс 18'
        }
    ];

    const LeafletMap = useLeafletMap(center, zoom, height, width, markers, imageUrl);

    const animRef = useAnim({
        endDelay: 1000,
        direction: '',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutExpo'
    });

    const animRef1 = useAnim({
        endDelay: 1000,
        direction: '',
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutExpo'
    });

    const animRef2 = useAnim({
        endDelay: 1000,
        direction: '',
        opacity: [0, 1],
        duration: 900,
        easing: 'easeInOutExpo'
    });

    const animRef3 = useAnim({
        endDelay: 1000,
        direction: '',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutExpo'
    });

    const animRef4 = useAnim({
        endDelay: 1000,
        direction: '',
        opacity: [0, 1],
        duration: 1100,
        easing: 'easeInOutExpo'
    });

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
                        <HeavyTextGray text="КОНТАКТЫ" margin="20px" color="#514F4F" fontSize="50px" className="large-adapted-text-gray"/>
                    </div>

                    <div className={styles.containerFromAutoBox}>
                        <div className={styles.containerFromAutoBoxWidth}>
                            <HeavyTextGray text="Автосервис Автобокс18" margin="40px" color="#514F4F" fontSize="40px" className="large-adapted-text-gray" ref={animRef}/>

                            <div className={styles.iconWhithText} ref={animRef1}>
                                <a href="tel:+83412567615">
                                    <box-icon type='solid' name='phone-call' color='#FF5C00' size='32px' />
                                </a>
                                <p className={styles.textGrayMain}>8(3412)56-76-15</p>
                            </div>

                            <div className={styles.iconWhithText}  ref={animRef2}>
                                <a href="https://www.google.com/maps/place/Маяковского,+11"  target="_blank" rel="noopener noreferrer">
                                    <box-icon name='location-plus' type='solid' color='#FF5C00' size='32px' />
                                </a>
                                <p className={styles.textGrayMain}>Маяковского, 11</p>
                            </div>

                            <div className={styles.iconWhithText}  ref={animRef3}>    
                            <box-icon type='solid' name='time' color='#FF5C00' size='32px'></box-icon>
                            <p className={styles.textGrayMain}>Пн-Пт - 9:00 до 19: 00</p>
                            </div>

                            <div className={styles.iconWhithText}  ref={animRef4}>
                                <a href="mailto:your-email@example.com" >
                                    <box-icon name='envelope' type='solid' color='#FF5C00' size='32px' />
                                </a>
                                <p className={styles.textGrayMain}>your-email@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="centered">
                        <HeavyTextGray text="ГДЕ МЫ НАХОДИТМСЯ" margin="40px" color="#514F4F" fontSize="50px" className="large-adapted-text-gray"/>
                    </div>

                    <div className="centered">
                        {LeafletMap}
                    </div>

                    <div className="centered">
                        <HeavyTextGray text="О НАС" margin="40px" color="#514F4F" fontSize="50px" className="large-adapted-text-gray"/>
                    </div>

                    <div className={styles.containerFromAutoBox} ref={animRef3}>
                        <div className={styles.containerFromAutoBoxWidth}>
                        <HeavyTextGray text='Добро пожаловать в автосервис "Автобокс18" в Ижевске!' margin="40px" color="#514F4F" fontSize="25px" className="large-adapted-text-gray"/>

                        <HeavyTextGray
                        
                        text='Мы – команда профессионалов, посвятившая свою жизнь автомобилям и их обслуживанию.
                         Наш автосервис предоставляет широкий спектр услуг,
                          начиная от базовой диагностики и заканчивая сложным ремонтом двигателей и кузовным ремонтом.
                           Мы гордимся тем, что предлагаем нашим клиентам высококачественные услуги по разумным ценам.' margin="20px" color="#514F4F" fontSize="23px" className="large-adapted-text-gray" />
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