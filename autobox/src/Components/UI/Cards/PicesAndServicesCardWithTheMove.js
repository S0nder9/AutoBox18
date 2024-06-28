import React from "react";
import styles from "./PicesAndServicesCardWithTheMove.module.css";

const PicesAndServicesCardWithTheMove = (props) => {
    const { backgroundImageUrl, textBig, textSmall, onClick } = props;

    return (
        <>
            <div
                className={styles.cardStylesForPicesAndServicesCardWithTheMove}
                style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
                onClick={onClick}
            >
                <p className="textWhiteBig">{textBig}</p>
                <p className="textDarkSmall">{textSmall}</p>
            </div>
        </>
    );
};

export default PicesAndServicesCardWithTheMove;
