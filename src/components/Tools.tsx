import React from 'react';
import './style/Text.css';

export type TextProps = {
    id: string,
    img?: string,
    side?: string
}

export default class Text extends React.Component<TextProps> {
    render(): React.ReactNode {
        const props = this.props;
        const {id, img, side} = props;

        const src = img != undefined ? require("./style/img/" + img + ".png").default : undefined;
        const alignment = side == undefined ? "left" : side;

        if (alignment == "left") {
            return <div id={"text-" + id} className={"text"}>
                {src != undefined &&
                <span className="text-logo">
                    <img src={src}/>
                </span>}

                <span className="text-description">
                {this.props.children}
            </span>
            </div>
        } else {
            return <div id={"text-" + id} className={"text"}>
            <span className="text-description">
                {this.props.children}
            </span>
                {src != undefined &&
                <span className="text-logo">
                     <img src={src}/>
                </span>}
            </div>
        }
    }
}


