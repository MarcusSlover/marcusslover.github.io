/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import '../style/App.css';
import '../style/Font.css'

import Header from '../main/Header';
import Body from '../main/Body'
import Footer from "../main/Footer";
import React from "react";
import Welcome from "../main/body/Welcome";
import AboutMe from "../main/body/AboutMe";
import MyCreations from "../main/body/MyCreations";
import Friends from "../main/body/Friends";

const App = () => {
    return <div id="app">
        <Header/>

        <Body>
            <Welcome/>
            <AboutMe/>
            <MyCreations/>
            <Friends/>
        </Body>

        <Footer/>
    </div>;
};

export default App;
