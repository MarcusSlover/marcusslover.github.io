/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React, {CSSProperties} from 'react';
import '../../style/Text.css'
import {Color} from "../utils/ColorUtil";
import {createLogoStyle} from "./TextUtil";

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
    const boxLogo = <span className="text-logo"><img src={image} alt={"Owned by MarcusSlover"}
                                                     className={"text-logo-img"} style={logoStyle}/></span>;

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

export const createBackStyle = (color: string, background?: string): CSSProperties => {
    return {
        borderBlockColor: color,
        backgroundColor: background,
    }
};

export default TextBox;

