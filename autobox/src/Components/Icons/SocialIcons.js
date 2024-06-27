import React from "react";
import styles from "./SocialIcons.module.css";

const SocialIcons = (props) => {
    const display = props.display || "flex";
    const justifyContent = props.justifyContent || "center";

    return (
        <div className= "socialIcons" style={{
            display: display,
            justifyContent: justifyContent
        }}>
            <a href="tel:+83412567615" className={styles.iconLink}>
                <box-icon type='solid' name='phone-call' color='white' size='32px'/>
            </a>
            <a href="https://t.me/yourusername" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <box-icon name='telegram' type='logo' color='white' size='32px'/>
            </a>
            <a href="mailto:your-email@example.com" className={styles.iconLink}>
                <box-icon name='envelope' type='solid' color='white' size='32px'/>
            </a>
            <a href="https://www.google.com/maps/place/Маяковского,+11" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <box-icon name='location-plus' type='solid' color='white' size='32px'/>
            </a>
        </div>
    );
}

export default SocialIcons;
