import React from 'react';
import './style/Text.css';

export type TextProps = {
    image?: string;
}

export default class Text extends React.Component<TextProps> {
    render(): React.ReactNode {
        const image = this.props.image;
        let src;

        if (image != undefined) {
            src = require("./style/img/" + this.props.image + ".png").default;
        }

        return <div id="text">
            {
                image != undefined &&
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


