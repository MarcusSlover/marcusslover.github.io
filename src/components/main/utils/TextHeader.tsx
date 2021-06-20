/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React, {CSSProperties, ReactElement, ReactNodeArray} from 'react';
import '../../style/Text.css'
import {increaseBrightness, Color} from "./ColorUtil";

export interface TextHeaderProps {
    id: string;
    title?: string;
    img?: string;
    imgSize?: number;
    side?: "right" | "left";
    color?: string;
    backColor?: string;
    titleColor?: string;
    backgroundColor?: string;
}

const TextHeader: React.FC<TextHeaderProps> = ({
                                                   id,
                                                   title,
                                                   img,
                                                   imgSize,
                                                   side,
                                                   color,
                                                   titleColor,
                                                   backColor,
    backgroundColor,
                                                   children
                                               }) => {
    const image = img !== undefined ? require("../../style/img/" + img + ".png").default : undefined;
    const alignment = side === undefined ? "left" : side;

    if (color !== undefined) {
        backColor = color;
        titleColor = increaseBrightness(color, 50);
    }
    const logoStyle = createLogoStyle(imgSize || 10);
    const bodyStyle = createBackStyle(backColor || Color.color, backgroundColor || Color.backgroundColor);
    const titleStyle = createTitleStyle(titleColor || Color.titleColor);
    const childColor = increaseBrightness(backColor || Color.color, 40);
    const childBackgroundColor = increaseBrightness(Color.backgroundColor, 5);

    const boxTitle = title !== undefined ? <div className={"text-title"}>{title}</div> : undefined;
    const boxLogo = <span className="text-logo"><img src={image} className={"text-logo-img"} style={logoStyle}/></span>;

    let extraChildren: ReactNodeArray = []
    const filteredChildren = React.Children.map(children, ((child, index) => {
        if (React.isValidElement(child)) {
            if (child.props.id) {
                let reactElement: ReactElement = React.cloneElement(child,
                    {
                        color: childColor,
                        background: childBackgroundColor
                    }, child.props.children);
                extraChildren.push(reactElement);
                return null;
            }
        }
        return child;
    }))
    const boxDescription = <span className="text-description">{filteredChildren}</span>;

    bodyStyle.textAlign = side;

    if (alignment === "left") {
        return <div id={id}>
            <section id={"text-" + id} className={"text"} style={bodyStyle}>
                <span className={"text-header"} style={titleStyle}>
                    {boxTitle !== undefined && boxTitle}
                </span>

                <span className={"text-section"}>
                    {image !== undefined && boxLogo}
                    {boxDescription}
                </span>
                {extraChildren}
            </section>
        </div>;
    } else {
        return <div id={id}>
            <section id={"text-" + id} className={"text"} style={bodyStyle}>
                <span className={"text-header"} style={titleStyle}>
                    {boxTitle !== undefined && boxTitle}
                </span>

                <span className={"text-section"}>
                    {boxDescription}
                    {image !== undefined && boxLogo}
                </span>
                {extraChildren}
            </section>
        </div>;
    }
}

export const createLogoStyle = (scale: number): CSSProperties => {
    return {
        width: scale + "vmax",
    }
};

export const createBackStyle = (color: string, background: string): CSSProperties => {
    return {
        borderBlockColor: color,
        backgroundColor: background,
    }
};

export const createTitleStyle = (c: string): CSSProperties => {
    return {
        backgroundColor: c
    }
}

export default TextHeader;