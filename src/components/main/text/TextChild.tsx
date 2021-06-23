/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React, {CSSProperties, ReactElement, ReactNodeArray} from 'react';
import '../../style/Text.css'
import {Color, increaseBrightness} from "../utils/ColorUtil";
import {createLogoStyle} from "./TextUtil";
import TextSectionProps from "./TextSection";

export interface TextChildProps {
    id: string;
    img?: string;
    imgSize?: number;
    github?: string;
    title?: string;
    color?: string;
    background?: string;
}

const TextChild: React.FC<TextChildProps> = ({id, img, imgSize, github, color, background, children}) => {

    const childColor = color || Color.color;
    const childBackgroundColor = background || Color.backgroundColor;

    const backStyle = createBackStyle(childColor, childBackgroundColor);
    const logoStyle = createLogoStyle(imgSize || 7);
    const image = img !== undefined ? require("../../style/img/" + img + ".png").default : undefined;
    const boxLogo = <span className="logo"><img draggable={false} src={image} alt={"Owned by MarcusSlover"}
                                                style={logoStyle}/></span>;

    const sectionBackColor = increaseBrightness(childBackgroundColor, 5);

    const extraChildren: ReactNodeArray = [];
    const filteredChildren = React.Children.map(children, ((child, index) => {
        if (React.isValidElement(child)) {
            const element: ReactElement = child;
            const {type} = element;

            if (type === TextSectionProps) {
                const reactElement: ReactElement = React.cloneElement(child,
                    {
                        color: "#7289d9",
                        background: sectionBackColor
                    }, child.props.children);
                extraChildren.push(reactElement);
                return null;
            }
        }
        return child;
    }));

    return <div id={id}>
        {extraChildren.length > 0 &&
        <section className={"layout"}>
            {extraChildren}
        </section>
        }

        {(filteredChildren !== undefined && filteredChildren !== null && filteredChildren.length) > 0 &&
        <section className={"text-box"} style={backStyle}>
            {image !== undefined && boxLogo}
            <section>{filteredChildren}</section>
        </section>
        }

    </div>;
}

export const createBackStyle = (color: string, background?: string): CSSProperties => {
    return {
        borderBlockColor: color,
        backgroundColor: background,
    };
};

export default TextChild;

