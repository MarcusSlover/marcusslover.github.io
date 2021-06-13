import React from 'react';
import './style/Text.css';

export type TextProps = {
    img?: string;
}

export default class Text extends React.Component<TextProps> {
    render(): React.ReactNode {
        const image = this.props.img;
        let src;

        if (image != undefined) {
            src = require("./style/img/" + this.props.img + ".png").default;
        }

        return <div id="text">
            {
                src != undefined &&
                <span className="text-logo">
                    <img src={src}/>
                </span>
            }
            <span className="text-description">
                {this.props.children}
            </span>
        </div>
    }
}


