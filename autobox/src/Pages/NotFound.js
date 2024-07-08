import styles from "./NotFound.module.css";
import React from "react";
import BackgroundImgContainer from "../Components/UI/Background Img container/BackgroundImgContainer";
import MainImgForContacts from "../Images/ImportantImages/Контакты.png";
import HeaderUpper from "../Components/UI/Header/HeaderUpper";
import Header from "../Components/UI/Header/Header";
import HeavyTextGray from "../Components/UI/Text/HeavyTextGray";
import ErrorPopup from "../Components/UI/ErrorGroup/ErrorPopup";

const NotFound = () => {
    return (
        <>
            <ErrorPopup message = "Страница не найдена" timeOut = "10000"/>
            <header>
                <BackgroundImgContainer url={MainImgForContacts} height="120vh">
                    <HeaderUpper />
                    <Header />
                    <div className={styles.centeredDiv}>
                        <div className={styles.content}>
                            <svg viewBox="0 0 960 300" className={styles.svg}>
                                <symbol id="s-text">
                                    <text textAnchor="middle" x="50%" y="50%">404</text>
                                </symbol>
                                <g className={styles.gAnts}>
                                    <use xlinkHref="#s-text" className={styles.text}></use>
                                    <use xlinkHref="#s-text" className={styles.text}></use>
                                    <use xlinkHref="#s-text" className={styles.text}></use>
                                    <use xlinkHref="#s-text" className={styles.text}></use>
                                    <use xlinkHref="#s-text" className={styles.text}></use>
                                </g>
                            </svg>
                        </div>
                      
                    </div> 
                </BackgroundImgContainer>
            </header>
        </>
    )
}

export default NotFound;
