import React from "react";
import styles from "./Header.module.css";
import Enrol from "../Buttons/Enrol";
import Line from "../Line/Line";

const Header = () => {
    return (
        <>
        <div className= "centered">
            <div className={styles.headerWrapper}>
            <p>Автосервис Автобокс18</p>

            <p className="textWhiteBig">цены и услуги</p>
            <p className="textWhiteBig">запчасти</p>
            <p className="textWhiteBig">контакты</p>
            <Enrol text = "Записаться"/>

           

            </div>
            
        </div>
        <div className="centered">

        <Line height = "4px" width = "calc(100% - 30%)" margin = "10px"/>
        </div>
            
        </>
    );
}

export default Header;
