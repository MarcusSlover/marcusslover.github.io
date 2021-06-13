import React, {useState} from 'react';

import './style/App.css';
import './style/Font.css'

import Header from './Header';
import About from './About';
import Theme from './Theme'

/*Toggleable settings for the entire app*/
export interface AppSettings {
    lightTheme: boolean
}

/*The app*/
export default class App extends React.Component<{}, AppSettings> {

    constructor(props: {}) {
        super(props);
        this.state = {lightTheme: false} // Default settings
    }

    render(): React.ReactNode {

        return <div id="app">
            <Theme>
                <Header/>
                <About/>
            </Theme>
        </div>
    }

}
