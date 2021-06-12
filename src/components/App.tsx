import React from 'react';
import './style/App.css';
import './style/Font.css'

import Header from './Header';
import About from './About';

/*Toggleable settings for the entire app*/
export interface AppSettings {
    // Currently empty
}

/*The app*/
export default class App extends React.Component<{}, AppSettings> {

    constructor(props: {}) {
        super(props); // Props are empty
        this.state = {} // Default settings
    }

    render(): React.ReactNode {
        return <div id="app">
            <Header/>
            <About/>
        </div>
    }

}
