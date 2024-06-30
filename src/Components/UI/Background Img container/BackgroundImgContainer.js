import React from "react";
import styles from "./BackgroundImgContainer.module.css";

const BackgroundImgContainer = (props) => {
    const height = props.height || "100vh";
    const width = props.width || "100%";
    const borderRadius = props.borderRadius || "0";
    const backgroundAttachment = props.backgroundAttachment || "scroll";


    return (
        <div
            className={`${styles.BackgroundImgContainer} "centered`}
            style={{ 
                backgroundImage: `url('${props.url}')`,
                height: height,
                width: width,
                borderRadius: borderRadius,
                backgroundAttachment: backgroundAttachment
            }}
        >
            {props.children}
        </div>
    );
};

export default BackgroundImgContainer;
