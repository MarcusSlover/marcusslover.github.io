/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React, {CSSProperties} from 'react';
import '../../style/Text.css'
import {Color} from "./ColorUtil";

export interface TextBoxProps {
    id: string;
    img?: string;
    imgSize?: number;
    github?: string;
    title?: string;
    color?: string;
    background?: string;
}

const TextBox: React.FC<TextBoxProps> = ({id, img, imgSize, github, color, background, children}) => {
    const backStyle = createBackStyle(color || Color.color, background || Color.backgroundColor);
    const logoStyle = createLogoStyle(imgSize || 7);
    const image = img !== undefined ? require("../../style/img/" + img + ".png").default : undefined;
    const boxLogo = <span className="text-logo"><img src={image} className={"text-logo-img"} style={logoStyle}/></span>;

    return <div id={id}>
        <section className={"text-box"} style={backStyle}>
            <section className={"text-logo small"}>
                {image !== undefined && boxLogo}
            </section>
            <section>
                {children}
            </section>
        </section>
    </div>
}

export const createLogoStyle = (scale: number): CSSProperties => {
    return {
        width: scale + "vmax",
        height: "auto",
        imageRendering: "pixelated"
    }
};

export const createBackStyle = (color: string, background?: string): CSSProperties => {
    return {
        display: "flex",
        flexDirection: "row",

        color: "white",
        fontSize: "1.25vmax",
        fontFamily: "Consolas, monospace",

        borderTopStyle: "none",
        borderBlockStyle: "solid",
        borderBlockColor: color,
        borderBlockWidth: "0.5vmax",

        borderRadius: "2vmax",
        backgroundColor: background,

        margin: "auto",
        marginTop: "1vmax",
        marginBottom: "1vmax",
        padding: "3vmin",
        width: "75%"
    }
};

export default TextBox;

