import Enrol from "../Buttons/Enrol";
import styles from "./PicesAndServicesCard.module.css";

const PicesAndServicesCard = (props) => {
    const backgroundImageUrl = props.backgroundImageUrl || "none";

    return (
        <div className={styles.cardStyles} style={{backgroundImage: `url(${backgroundImageUrl})`,}}>
            <p className="textWhiteBig">{props.text}</p>
            <Enrol text = "ПОДРОБНЕЕ"/>
        </div>
    )
}

export default PicesAndServicesCard;