import React from "react";
import { Helmet } from "react-helmet";
import styles from "./HeaderUpper.module.css";

const HeaderUpper = () => {

    return (
        <div className = "centered">
            <Helmet>
                <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            </Helmet>
            <div className={styles.headerContainer}>
                <p className="textWhiteSmall">8(3412)56-76-15</p>
                <p className="textWhiteSmall">Маяковского, 11</p>
                <p className="textWhiteSmall">Пн-Пт - с 9:00 до 19:00</p>
                <div className={styles.iconContainer}>
                  <a href="tel:+83412567615" className={styles.iconLink}>
                        <box-icon type='solid' name='phone-call' color='white' size='32px'></box-icon>
                    </a>
                    <a href="https://t.me/yourusername" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                        <box-icon name='telegram' type='logo' color='white' size='32px'></box-icon>
                    </a>
                    <a href="mailto:your-email@example.com" className={styles.iconLink}>
                        <box-icon name='envelope' type='solid' color='white' size='32px'></box-icon>
                    </a>
                    <a href="https://www.google.com/maps/place/Маяковского,+11" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                        <box-icon name='location-plus' type='solid' color='white' size='32px'></box-icon>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderUpper;
