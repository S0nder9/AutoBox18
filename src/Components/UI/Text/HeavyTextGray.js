import React, { forwardRef, useEffect } from "react";
import styles from "./HeavyTextGray.module.css";

const HeavyTextGray = forwardRef((props, ref) => {
    const fontSize = props.fontSize || "30px";
    const color = props.color || "white";
    const className = props.className || "HeavyTextGray";
    const margin = props.margin || "0px";

    return (
        <p
        ref={ref}
            className={className}
            style={{
                fontSize: fontSize,
                color: color,
                margin: margin
            }}
        >{props.text}</p>
    );
});

export default HeavyTextGray;
