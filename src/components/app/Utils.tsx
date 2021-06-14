/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React, {CSSProperties} from 'react';
import '../style/Text.css';

export interface TextProps {
    id: string;
    title?: string;
    img?: string;
    side?: "right" | "left";
    color?: string;
    backColor?: string;
    titleColor?: string;
}

export const getTextBackStyle = (color: string): CSSProperties => {
    return {
        display: "flex",
        flexDirection: "column",

        color: "white",
        fontSize: "2vw",
        fontFamily: "Consolas, monospace",

        borderBlockStyle: "solid",
        borderBlockColor: color,
        borderBlockWidth: "1vh",

        borderRadius: "2vw",
        backgroundColor: "#34495e",
        boxShadow: "3vh 3vh #283949",

        margin: "auto",
        marginTop: "7vh",
        padding: "4vmin",
        width: "75%"
    }
};

export const getTextHeaderStyle = (c: string): CSSProperties => {
    return {
        color: "black",

        borderColor: "white",
        borderStyle: "solid",
        borderRadius: "1vw",

        textAlign: "center",
        fontSize: "3vw",

        backgroundColor: c
    }
}

export const increaseBrightness = (hex: string, percent: number) => {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length == 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    const r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
        ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
        ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
        ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
};

const Text: React.FC<TextProps> = ({id, title, img, side, color, titleColor, backColor, children}) => {
    const image = img !== undefined ? require("../style/img/" + img + ".png").default : undefined;
    const alignment = side === undefined ? "left" : side;

    const boxTitle = title !== undefined ? <div className={"text-title"}>{title}</div> : undefined;
    const boxLogo = <span className="text-logo"><img src={image}/></span>;
    const boxDescription = <span className="text-description">{children}</span>;

    if (color !== undefined) {
        backColor = color;
        titleColor = increaseBrightness(color, 50);
    }

    const bodyStyle = getTextBackStyle(backColor || "#123456");
    const titleStyle = getTextHeaderStyle(titleColor || "#3f89d3");

    bodyStyle.textAlign = side;

    if (alignment === "left") {
        return <div id={"text-" + id} className={"text"} style={bodyStyle}>
            <div className={"text-header"} style={titleStyle}>
                {boxTitle !== undefined && boxTitle}
            </div>
            <span className={"text-section"}>
                {image !== undefined && boxLogo}
                {boxDescription}
            </span>

        </div>;
    } else {
        return <div id={"text-" + id} className={"text"} style={bodyStyle}>
            <div className={"text-header"} style={titleStyle}>
                {boxTitle !== undefined && boxTitle}
            </div>
            <span className={"text-section"}>
                {boxDescription}
                {image !== undefined && boxLogo}
            </span>
        </div>;
    }
}

export default Text;



