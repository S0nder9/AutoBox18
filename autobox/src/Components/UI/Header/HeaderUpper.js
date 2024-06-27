import React from "react";
import { Helmet } from "react-helmet";
import styles from "./HeaderUpper.module.css";
import SocialIcons from "../../Icons/SocialIcons";

const HeaderUpper = () => {
  return (
    <div className="centered">
      <Helmet>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Helmet>
      <div className={styles.headerContainer}>
        <p className="textWhiteSmall">8(3412)56-76-15</p>
        <p className="textWhiteSmall">Маяковского, 11</p>
        <p className="textWhiteSmall">Пн-Пт - с 9:00 до 19:00</p>
        <SocialIcons/>
      </div>
    </div>
  );
};

export default HeaderUpper;
