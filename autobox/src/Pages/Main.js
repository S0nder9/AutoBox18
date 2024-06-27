import React from "react";
import BackgroundImgContainer from "../Components/UI/Background Img container/BackgroundImgContainer";
import HeaderUpper from "../Components/UI/Header/HeaderUpper";
import Header from "../Components/UI/Header/Header";
import HeavyText from "../Components/UI/Text/HeavyText";
import Enrol from "../Components/UI/Buttons/Enrol";
import styles from "./Main.module.css";
import HeavyTextGray from "../Components/UI/Text/HeavyTextGray";
import PicesAndServicesCard from "../Components/UI/Cards/PicesAndServicesCard";


function Main() {
    return (
        <React.Fragment>
            <header>
                <BackgroundImgContainer url="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg" height="100vh">
                    <HeaderUpper />
                    <Header />
                    <div className="centered" style={{ height: "60%" }}>
                        <HeavyText className="centered" fontSize="50px" text="РЕМОНТ ЛЮБОЙ СЛОЖНОСТИ В ИЖЕВСКЕ" />
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
                        <HeavyTextGray text="ЦЕНЫ И УСЛУГИ" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className={styles.picesAndServices}>
                        <PicesAndServicesCard
                            backgroundImageUrl="https://img.freepik.com/free-photo/close-up-on-adorable-kitten-outdoors_23-2150782405.jpg"
                            text="ДИАГНОСТИКА"
                        />

                        <PicesAndServicesCard
                            backgroundImageUrl="https://img.freepik.com/free-photo/close-up-on-adorable-kitten-outdoors_23-2150782405.jpg"
                            text="ТЕХ. ОБСЛУЖИВАНИЕ"
                        />

                        <PicesAndServicesCard
                            backgroundImageUrl="https://img.freepik.com/free-photo/close-up-on-adorable-kitten-outdoors_23-2150782405.jpg"
                            text="РЕМОНТ ХОДОВОЙ"
                        />

                        <PicesAndServicesCard
                            backgroundImageUrl="https://img.freepik.com/free-photo/close-up-on-adorable-kitten-outdoors_23-2150782405.jpg"
                            text="РЕМОНТ ДВС, КПП, АКПП"
                        />
                    </div>
                </div>

                <div className={styles.thirdBlock}>
                    <div className="centered">
                        <HeavyTextGray text="КАК ДОЕХАТЬ" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>
                    <BackgroundImgContainer url="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg" height="64vh">
                        <div className={styles.howToGo}>

                            
                             <BackgroundImgContainer
                              url="https://img.freepik.com/free-photo/close-up-on-adorable-kitten-outdoors_23-2150782405.jpg" 
                              height="60vh" 
                              width = "80%" 
                              borderRadius = "20px"
                              >

                             <div className={styles.positionForImgAndP}>
                                <p className="textWhiteBig" style={{padding: "20px"}}>ул. Маяковского, 11 - територия бывшего авторынка</p>
                                </div>
                             </BackgroundImgContainer>
                            

                             <BackgroundImgContainer 
                             url="https://img.freepik.com/free-photo/close-up-on-adorable-kitten-outdoors_23-2150782405.jpg" 
                             height="60vh" 
                             width = "80%" 
                             borderRadius = "20px"
                             />
                            

                        </div>
                    </BackgroundImgContainer>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main;
