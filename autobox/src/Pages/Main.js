import React from "react";
import BackgroundImgContainer from "../Components/UI/Background Img container/BackgroundImgContainer";
import HeaderUpper from "../Components/UI/Header/HeaderUpper";
import Header from "../Components/UI/Header/Header";
import HeavyText from "../Components/UI/Text/HeavyText";
import Enrol from "../Components/UI/Buttons/Enrol";
import styles from "./Main.module.css";
import HeavyTextGray from "../Components/UI/Text/HeavyTextGray";
import PicesAndServicesCard from "../Components/UI/Cards/PicesAndServicesCard";
import Footer from "../Components/UI/Footer/Footer";
import logoIcon from "../Images/ImportantImages/LogoOrange.png";
import MainImg from "../Images/ImportantImages/Фото на главном меню.png";
import CardImg1 from "../Images/ImportantImages/Для карточки 1.png";
import CardImg2 from "../Images/ImportantImages/Для карточки 2.png";
import CardImg3 from "../Images/ImportantImages/Для карточки 3.png";
import CardImg4 from "../Images/ImportantImages/Для карточки 4.png";
import MainImg2 from "../Images/ImportantImages/Фото на главном меню 2.png";
import AutoBox18Photo from "../Images/ImportantImages/Фото сервиса.jpg";
import useLeafletMap from "../Hooks/useLeafletMap";


function Main() {

    const center = [56.828478, 53.200163];
    const zoom = 13;
    const height = "50vh";
    const width = "100%";
    const imageUrl = logoIcon;

    const markers = [
        {
            position: center,
            popup: 'Маяковского, 11. Автобокс 18'
        }
    ];

    const LeafletMap = useLeafletMap(center, zoom, height, width, markers, imageUrl);

    return (
        <React.Fragment>
            <header>

                <BackgroundImgContainer url={MainImg} height="100vh">
                    <HeaderUpper />
                    <Header />
                    <div className="centered" style={{ height: "60%" }}>
                        <HeavyText className="large-adapted-text" fontSize="50px" text="РЕМОНТ ЛЮБОЙ СЛОЖНОСТИ В ИЖЕВСКЕ" />
                    </div>

                    <div className={styles.enrolsPosition}>
                        <Enrol text="Запись онлайн" />
                        <Enrol text="Написать" />
                    </div>

                </BackgroundImgContainer>
            </header>

            <main>
                <div className={styles.secondBlock}>
                    <div className="centered">
                        <HeavyTextGray text="ЦЕНЫ И УСЛУГИ" className="large-adapted-text-gray" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className={styles.picesAndServices}>
                        <PicesAndServicesCard
                            backgroundImageUrl={CardImg1}
                            text="ДИАГНОСТИКА"
                        />

                        <PicesAndServicesCard
                            text="ТЕХ. ОБСЛУЖИВАНИЕ"
                            backgroundImageUrl={CardImg2}
                        />

                        <PicesAndServicesCard
                            backgroundImageUrl={CardImg3}
                            text="РЕМОНТ ХОДОВОЙ"
                        />

                        <PicesAndServicesCard
                            backgroundImageUrl={CardImg4}
                            text="РЕМОНТ ДВС, КПП, АКПП"
                        />
                    </div>
                </div>

                <div className={styles.thirdBlock}>
                    <div className="centered">
                        <HeavyTextGray text="КАК ДОЕХАТЬ" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className={styles.bcImgDiv}>
                        <div className={styles.howToGo}>


                            <BackgroundImgContainer
                                url={AutoBox18Photo}
                                height="50vh"
                                width="100%"
                                borderRadius="20px"
                            >

                                <div className={styles.positionForImgAndP}>
                                    <p className="textWhiteBig" style={{ padding: "20px" }}>ул. Маяковского, 11 - територия бывшего авторынка</p>
                                </div>
                            </BackgroundImgContainer>
                                
                                   {LeafletMap} 
                               
                                
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

export default Main;
