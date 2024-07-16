import React, { forwardRef } from "react";

const HeavyText = forwardRef((props, ref) => {
    const fontSize = props.fontSize || "30px";
    const color = props.color || "white";
    const className = props.className || "HeavyText";
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

export default HeavyText;
