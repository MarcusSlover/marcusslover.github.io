/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React from 'react';
import TextHeader from './utils/TextHeader'
import TextBox from "./utils/TextBox";

const Body = () => {
    return <div id="body">

        <TextHeader id={"welcome"}
                    title={"Welcome dear visitor!"}
                    color={"#76e111"}
                    img={"cactus"}
                    side={"left"}>
            Thank you for visiting my website!
            <br/>
            Here you can discover quite a few things about me and my projects.
            You can use the navigator above or your mouse wheel to learn more about me!
        </TextHeader>

        <TextHeader id={"about"}
                    title={"About me"}
                    color={"#1dc26a"}
                    img={"command_block_minecart"}
                    imgSize={10}
                    side={"left"}>
            Hi, I'm Marcus and I live in Warsaw.
            <br/>
            I am 18 years old and coding is my true passion.
            <br/>
            My favorite programming languages are:
            Java, Kotlin, TypeScript, and JavaScript.

            <TextBox id={"about-box-general"}>
                So, how did I learn programming? Well, that's a long story.
                My "coding" journey started at the age of eight.
                I was introduced to Scratch by my local school teachers; it allowed me to
                fulfil part of my creativity and helped me making a step into the "world" of programming.
            </TextBox>

            <TextBox id={"about-box-cpp"}>
                Surprisingly, as I moved on I started watching C++ tutorials.
                At the time, I was creating simple programs that would calculate or solve
                certain problems. Sadly, since then I haven't felt in love with that language at all...
            </TextBox>

        </TextHeader>

    </div>;
}

export default Body;
