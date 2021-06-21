/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React from 'react';
import AboutMe from "./body/AboutMe";
import Welcome from "./body/Welcome";
import MyCreations from "./body/MyCreations";
import Friends from "./body/Friends";

const Body = () => {
    return <div id="body">
        <Welcome/>
        <AboutMe/>
        <MyCreations/>
        <Friends/>
    </div>;
}

export default Body;
