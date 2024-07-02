import React from "react";
import MainImg from "../Images/ImportantImages/Фото на главном меню.png";
import BackgroundImgContainer from "../Components/UI/Background Img container/BackgroundImgContainer";
import HeaderUpper from "../Components/UI/Header/HeaderUpper";
import Header from "../Components/UI/Header/Header";
import HeavyText from "../Components/UI/Text/HeavyText";
import Footer from "../Components/UI/Footer/Footer";
import HeavyTextGray from "../Components/UI/Text/HeavyTextGray";
import styles from "./PricesAndServices.module.css";
// import PicesAndServicesCardWithTheMove from "../Components/UI/Cards/PicesAndServicesCardWithTheMove";
import PricesAndServicesLogic from "../Components/Logic/pricesAndServicesLogic";

const PricesAndServices = () => {
    return (
        <React.Fragment>
            <header>

               <BackgroundImgContainer url={MainImg} height="65vh">
                    <HeaderUpper />
                    <Header />
                    <div className="centered" style={{ height: "60%" }}>
                        <HeavyText className="centered" fontSize="50px" text="РЕМОНТ ЛЮБОЙ СЛОЖНОСТИ В ИЖЕВСКЕ" />
                    </div>

                </BackgroundImgContainer>
            </header>

            <main>
                <div>
                    <div className="centered">
                        <HeavyTextGray text="ОСНОВНЫЕ КАТЕГРИИ УСЛУГ" margin="20px" color="#514F4F" fontSize="50px" />
                    </div>

                    <div className={styles.containerForCards}>
                        <PricesAndServicesLogic/>
                    </div>
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </React.Fragment>
    )
}

export default PricesAndServices;