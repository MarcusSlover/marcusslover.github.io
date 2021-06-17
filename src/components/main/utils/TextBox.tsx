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
    title?: string;
    color?: string;
    background?: string;
}

const TextBox: React.FC<TextBoxProps> = ({id, img, imgSize, color, background, children}) => {
    const backStyle = createBackStyle(color || Color.color, background || Color.backgroundColor);
    const logoStyle = createLogoStyle(imgSize || 10);
    const image = img !== undefined ? require("../../style/img/" + img + ".png").default : undefined;
    const boxLogo = <span className="text-logo"><img src={image} style={logoStyle}/></span>;

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
        width: scale + "vw",
        height: "auto",
        imageRendering: "pixelated"
    }
};

export const createBackStyle = (color: string, background?: string): CSSProperties => {
    return {
        display: "flex",
        flexDirection: "row",

        color: "white",
        fontSize: "2vw",
        fontFamily: "Consolas, monospace",

        borderTopStyle: "none",
        borderBlockStyle: "solid",
        borderBlockColor: color,
        borderBlockWidth: "1vh",

        borderRadius: "2vw",
        backgroundColor: background,

        margin: "auto",
        marginTop: "3vh",
        marginBottom: "3vh",
        padding: "3vmin",
        width: "75%"
    }
};

export default TextBox;

