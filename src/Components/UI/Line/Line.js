import React from "react";

const Line = (props) => {
    const width = props.width || "100%";
    const color = props.color || "white";
    const height = props.height || "1px";
    const margin = props.margin || "1px";


    return (
        <div
            className="line"
            style={{
                width: width,
                backgroundColor: color,
                height: height, margin: margin 
            }}
        ></div>
    );
}

export default Line;
