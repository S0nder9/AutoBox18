import React from "react";
import styles from "./BackgroundImgContainer.module.css";

const BackgroundImgContainer = (props) => {
    const height = props.height || "100vh";

    return (
        <div
            className={styles.BackgroundImgContainer}
            style={{ 
                backgroundImage: `url(${props.url})`,
                height: height
             }}
        >
            {props.children}
        </div>
    );
};

export default BackgroundImgContainer;
