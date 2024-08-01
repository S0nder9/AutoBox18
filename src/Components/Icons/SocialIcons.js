import React from "react";
import styles from "./SocialIcons.module.css";
import obj_with_constants from "../../Helper/constants";

const SocialIcons = (props) => {
    const display = props.display || "flex";
    const justifyContent = props.justifyContent || "center";

    return (
        <div className= "socialIcons" style={{
            display: display,
            justifyContent: justifyContent
        }}>
            <a href={`tel:+${obj_with_constants.PHONENUMBER1}`} className={styles.iconLink}>
                <box-icon type='solid' name='phone-call' color='white' size='32px'/>
            </a>
            <a href={obj_with_constants.TG} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <box-icon name='telegram' type='logo' color='white' size='32px'/>
            </a>
            <a href={obj_with_constants.MAIL} className={styles.iconLink}>
                <box-icon name='envelope' type='solid' color='white' size='32px'/>
            </a>
            <a href={obj_with_constants.REF} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <box-icon name='location-plus' type='solid' color='white' size='32px'/>
            </a>
        </div>
    );
}

export default SocialIcons;
