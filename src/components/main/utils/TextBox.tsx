/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React, {CSSProperties} from 'react';
import '../../style/Text.css'
import {Color} from "./ColorUtil";

export interface TextBoxProps {
    id: string;
    title?: string;
    color?: string;
    background?: string;
}

const TextBox: React.FC<TextBoxProps> = ({id, color, background, children}) => {
    const backStyle = createBackStyle(color || Color.color, background || Color.backgroundColor);

    return <div id={id}>
        <section className={"text-box"} style={backStyle}>
            {children}
        </section>
    </div>
}

export const createBackStyle = (color: string, background?: string): CSSProperties => {
    return {
        display: "flex",
        flexDirection: "column",

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
        padding: "4vmin",
        width: "75%"
    }
};

export default TextBox;

