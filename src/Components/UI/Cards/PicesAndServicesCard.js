import Enrol from "../Buttons/Enrol";
import EnrolNavigator from "../Buttons/EnrolNavigator";
import styles from "./PicesAndServicesCard.module.css";

const PicesAndServicesCard = (props) => {
    const backgroundImageUrl = props.backgroundImageUrl || "none";

    return (
        <div className={styles.cardStyles} style={{backgroundImage: `url(${backgroundImageUrl})`,}}>
            <p className="textWhiteBig">{props.text}</p>
            <EnrolNavigator text = "ПОДРОБНЕЕ" to = "/pricesAndServices"/>
        </div>
    )
}

export default PicesAndServicesCard;