import React from "react";
import styles from "./PicesAndServicesCardWithTheMove.module.css";

const PicesAndServicesCardWithTheMove = ({ backgroundImageUrl, textBig, textSmall }) => {
  return (
    <div
      className={styles.cardStylesForPicesAndServicesCardWithTheMove}
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <p className="textWhiteBig">{textBig}</p>
      <p className="textDarkSmall">{textSmall}</p>
    </div>
  );
};

export default PicesAndServicesCardWithTheMove;
