/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import {CSSProperties} from "react";

export const createLogoStyle = (scale: number): CSSProperties => {
    return {
        width: scale + "vmax",
    };
};

export const createBackStyle = (color: string, background: string, textSize?: number): CSSProperties => {
    return {
        borderBlockColor: color,
        fontSize: (textSize || 1.5) + "vmax",
        backgroundColor: background
    };
};

export const createTitleStyle = (color: string): CSSProperties => {
    return {
        backgroundColor: color
    };
}