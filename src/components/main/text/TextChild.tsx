/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import React, {CSSProperties, ReactElement, ReactNode, useState} from 'react';
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

/**
 * A child of {@link TextParent}
 * @constructor
 */
const TextChild: React.FC<TextChildProps> = ({
                                                 id,
                                                 img,
                                                 imgSize,
                                                 github,
                                                 color,
                                                 background,
                                                 children
                                             }) => {

    // Color styles of the text box.
    const childColor = color || Color.color;
    const childBackgroundColor = background || Color.backgroundColor;

    // Style of the background.
    const backStyle = createBackStyle(childColor, childBackgroundColor);

    // Logo creation.
    const logoStyle = createLogoStyle(imgSize || 7);
    const image = img !== undefined ? require("../../style/img/" + img + ".png").default : undefined;
    const boxLogo = <span className="logo"><img draggable={false} src={image} alt={"Owned by MarcusSlover"}
                                                style={logoStyle}/></span>;

    const sectionBackColor = increaseBrightness(childBackgroundColor, 5);

    // Modification of children colors.
    const extraChildren: ReactNode[] = [];
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

    // Reactive hovering.
    //const [hovering, setHovering] = useState(false);
    //TODO: add github links

    // Go to link.
    const goToWebsite = (url?: string) => {
        if (url == null) return;
        window.open(url, '_blank')
    }

    // Html layout.
    return <div id={id}
                onClick={() => goToWebsite(github)}
    >
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


/**
 * Creates a background style with the given color values.
 * @param color Color of the border top-bottom.
 * @param background Color of the background.
 */
export const createBackStyle = (color: string, background?: string): CSSProperties => {
    return {
        borderBlockColor: color,
        backgroundColor: background,
    };
};

export default TextChild;

