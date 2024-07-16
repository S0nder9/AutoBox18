import React, { forwardRef } from 'react';
import EnrolNavigator from "../Buttons/EnrolNavigator";
import styles from "./PicesAndServicesCard.module.css";

const PicesAndServicesCard = forwardRef((props, ref) => {
    const backgroundImageUrl = props.backgroundImageUrl || "none";
    const className = `${styles.cardStyles} ${props.className}`;

    return (
        <div ref={ref} className={className} style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
            <p className="textWhiteBig">{props.text}</p>
            <EnrolNavigator text="ПОДРОБНЕЕ" to="/pricesAndServices" />
        </div>
    );
});

export default PicesAndServicesCard;
