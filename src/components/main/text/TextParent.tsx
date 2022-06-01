/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import React, {ReactElement, ReactNode} from 'react';
import '../../style/Text.css'
import {Color, increaseBrightness} from "../utils/ColorUtil";
import {createBackStyle, createLogoStyle, createTitleStyle} from "./TextUtil";
import TextChildProps from "./TextChild";

export interface TextParentProps {
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

/**
 * Parent of all text boxes shown on the website.
 * Manages images layout and children modifications.
 * @constructor
 */
const TextParent: React.FC<TextParentProps> = ({
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

    // Image creation.
    const image = img !== undefined ? require("../../style/img/" + img + ".png") : undefined;
    const alignment = side === undefined ? "left" : side;

    // Coloring.
    if (color !== undefined) {
        backColor = color;
        titleColor = increaseBrightness(color, 50);
    }

    // Logo creation.
    const logoStyle = createLogoStyle(imgSize || 10);
    const bodyStyle = createBackStyle(backColor || Color.color, backgroundColor || Color.backgroundColor);
    bodyStyle.textAlign = side;

    // Titles and children styles.
    const titleStyle = createTitleStyle(titleColor || Color.titleColor);
    const childColor = increaseBrightness(backColor || Color.color, 40);

    // Background creation.
    const childBackgroundColor = increaseBrightness(Color.backgroundColor, 5);
    const boxTitle = title !== undefined ? <div className={"title"}>{title}</div> : undefined;
    const boxLogo = <span className={"logo"}> <img draggable={false} src={image} alt={"Owned by MarcusSlover"}
                                                   style={logoStyle}/></span>;

    // Children modifications.
    const extraChildren: ReactNode[] = [];
    const filteredChildren = React.Children.map(children, ((child, index) => {
        if (React.isValidElement(child)) {
            const element: ReactElement = child;
            const {type} = element;
            if (type === TextChildProps) {
                const reactElement: ReactElement = React.cloneElement(child,
                    {
                        color: childColor,
                        background: childBackgroundColor
                    }, child.props.children);
                extraChildren.push(reactElement);
                return null;
            }
        }
        return child;
    }));


    // Div for the description box.
    const boxDescription = <div className="description">{filteredChildren}</div>;

    // Body of the tex box.
    const bodyElement = (alignment === "left") ?
        <div className={"body"}>
            {image !== undefined && boxLogo}
            {boxDescription}
        </div>
        :
        <div className={"body"}>
            {boxDescription}
            {image !== undefined && boxLogo}
        </div>;

    // Title div.
    const headerElement = <div className={"header"} style={titleStyle}>{boxTitle !== undefined && boxTitle}</div>;

    // Html layout.
    return <div id={id}>
        <section className={"text"} style={bodyStyle}>
            {headerElement}
            {bodyElement}
            {extraChildren}
        </section>
    </div>;
}

export default TextParent;