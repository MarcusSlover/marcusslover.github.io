/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import '../style/App.css';
import '../style/Font.css'

import Header from '../main/Header';
import Body from '../main/Body'
import Footer from "../main/Footer";

const App = () => {
    return <div id="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>;
}

export default App;
