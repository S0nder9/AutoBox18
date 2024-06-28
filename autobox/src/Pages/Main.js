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
import MainImg from "../Images/ImportantImages/Фото на главном меню.png";


function Main() {
    return (
        <React.Fragment>
            {/* <header style={{backgroundImage: `url("${MainImg}")`}}> */}
            <header>

               <BackgroundImgContainer url={MainImg} height="100vh">
                    <HeaderUpper />
                    <Header />
                    <div className="centered" style={{ height: "60%" }}>
                        <HeavyText className="centered" fontSize="50px" text="РЕМОНТ ЛЮБОЙ СЛОЖНОСТИ В ИЖЕВСКЕ" />
                    </div>

                    <div className={styles.enrolsPosition}>
                        <Enrol text="Запись онлайн"/>
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
                            backgroundImageUrl="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg"
                            text="ДИАГНОСТИКА"
                        />

                        <PicesAndServicesCard
                            text="ТЕХ. ОБСЛУЖИВАНИЕ"
                            backgroundImageUrl="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg"
                        />

                        <PicesAndServicesCard
                            backgroundImageUrl="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg"
                            text="РЕМОНТ ХОДОВОЙ"
                        />

                        <PicesAndServicesCard
                            backgroundImageUrl="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg"
                            text="РЕМОНТ ДВС, КПП, АКПП"
                        />
                    </div>
                </div>

                <div className={styles.thirdBlock}>
                    <div className="centered">
                        <HeavyTextGray text="КАК ДОЕХАТЬ" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>
                    <BackgroundImgContainer url="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg" height="55vh" backgroundAttachment = "fixed">
                        <div className={styles.howToGo}>

                            
                             <BackgroundImgContainer
                              url="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg" 
                              height="50vh" 
                              width = "100%" 
                              borderRadius = "20px"
                              >

                             <div className={styles.positionForImgAndP}>
                                <p className="textWhiteBig" style={{padding: "20px"}}>ул. Маяковского, 11 - територия бывшего авторынка</p>
                                </div>
                             </BackgroundImgContainer>
                            

                             <BackgroundImgContainer 
                             url="https://хорошийсервис.рф/wp-content/uploads/2018/03/services1.jpg" 
                             height="50vh" 
                             width = "100%" 
                             borderRadius = "20px"
                             />
                            

                        </div>
                    </BackgroundImgContainer>
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </React.Fragment>
    )
}

export default Main;
