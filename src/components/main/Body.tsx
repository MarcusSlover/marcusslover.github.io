/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React from 'react';
import Text from '../app/Utils'

const Body = () => {
    return <div id="body">

        <Text id={"welcome"}
              title={"Welcome dear visitor!"}
              color={"#76e111"}
              img={"cactus"}
              side={"left"}>
            Thank you for visiting my website!
            <br/>
            Here you can discover quite a few things about me and my projects.
            You can use the navigator above or your mouse wheel to learn more about me!
        </Text>

        <Text id={"about"}
              title={"About me"}
              color={"#1dc26a"}
              img={"turtle_helmet"}
              side={"left"}>
            Hi, I'm Marcus and I live in Warsaw.
            <br/>
            I am 18 years old and coding is my true passion.
            <br/>
            My favorite programming languages are:
            Java, Kotlin, TypeScript, and JavaScript.
        </Text>

        <br></br>
    </div>;
}

export default Body;
