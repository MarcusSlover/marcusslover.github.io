/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React, {CSSProperties} from 'react';
import '../../style/Text.css'
import {Color} from "../utils/ColorUtil";
import {createLogoStyle} from "./TextUtil";

export interface TextChildProps {
    id: string;
    img?: string;
    imgSize?: number;
    github?: string;
    title?: string;
    color?: string;
    background?: string;
    sections?: boolean;
}

const TextChild: React.FC<TextChildProps> = ({id, img, imgSize, github, color, background, sections, children}) => {
    const backStyle = createBackStyle(color || Color.color, background || Color.backgroundColor);
    const logoStyle = createLogoStyle(imgSize || 7);
    const image = img !== undefined ? require("../../style/img/" + img + ".png").default : undefined;
    const boxLogo = <span className="logo"><img src={image} alt={"Owned by MarcusSlover"} style={logoStyle}/></span>;

    if (sections) {
        return <div id={id}>
            {children}
        </div>
    }

    return <div id={id}>
        <section className={"text-box"} style={backStyle}>
            {image !== undefined && boxLogo}
            <section>{children}</section>
        </section>
    </div>
}

export const createBackStyle = (color: string, background?: string): CSSProperties => {
    return {
        borderBlockColor: color,
        backgroundColor: background,
    }
};

export default TextChild;

