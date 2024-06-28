import React from "react";
import styles from "./WindowForPricesAndServices.module.css";

const WindowForPricesAndServices = ({ id }) => {
  return (
    <div className="centered">
      <div className={styles.wrapperContainer}>
        <p className="textGrayHeavy">ДИАГНОСТИКА АВТОМОБИЛЯ</p>
        <p>Card ID: {id}</p>
      </div>
    </div>
  );
};

export default WindowForPricesAndServices;
