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
                    img={"welcome"}
                    side={"left"}>
            Thank you for visiting my website!
            <br/>
            Here you can discover quite a few things about me and my projects.
            You can use the navigator above or your mouse wheel to learn more about me!
        </TextHeader>

        <TextHeader id={"about"}
                    title={"About me"}
                    color={"#1dc26a"}
                    img={"slover"}
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
                certain problems. Sadly, since then I haven't felt in "love" with that language at all...
            </TextBox>

        </TextHeader>

        <TextHeader id={"creations"}
                    title={"My Creations"}
                    color={"#0cabc9"}
                    img={"creations"}
                    imgSize={10}
                    side={"left"}>
            Pretty much most of my creations have to do something with Minecraft.
            I absolutely love developing Minecraft plugins. Once, I even created my fully custom network!
            There probably are even some YouTube videos about SloverTeam Network.

            <TextBox id={"creations-box-holograms"}>
                <b><u>FishingPlus</u> 🐟</b>
                <br/>
                A Minecraft plugin that makes fishing better & more interesting!
                Adds tons of new content and quests. Get your rods and start working!
                Currently in heavy development.
            </TextBox>

        </TextHeader>

    </div>;
}

export default Body;
