import React from 'react';
import './style/Text.css'

export default class Text extends React.Component {
    render(): React.ReactNode {
        return <span id="text">
            {this.props.children}
        </span>
    }
}


