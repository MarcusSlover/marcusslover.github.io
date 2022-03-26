/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import TextChild from "../text/TextChild";
import TextParent from "../text/TextParent";
import React from "react";

const AboutMe = () => {
    const years = new Date().getFullYear() - 2003;

    return <>
        <TextParent id={"about"}
                    title={"About me"}
                    color={"#1dc26a"}
                    img={"slover"}
                    side={"left"}>
            Hi, I'm Marcus and I live in Warsaw.
            <br/>
            I am {years} years old and coding is my true passion.
            <br/>
            My favorite programming languages are:
            Java, Kotlin, TypeScript, and JavaScript.

            <TextChild id={"about-box-general"}>
                So, how did I learn to program? Well, that's a long story.
                My "coding" journey started at the age of eight.
                I was introduced to Scratch by my local school teachers; it allowed me to
                fulfill part of my creativity and helped me making a step into the "world" of programming.
            </TextChild>

            <TextChild id={"about-box-cpp"}>
                Surprisingly, as I moved on, I started watching C++ tutorials.
                At the time, I was creating simple programs that would calculate or solve specific problems.
                Sadly, I haven't fallen in "love" with that language at all...
            </TextChild>

            <TextChild id={"about-box-break"}>
                As I started dealing with more advanced & complicated programs, I realized how irritating it became.
                I had decided to take a break before I came back to programming.
                However, that allowed to discover more things about games...
            </TextChild>

            <TextChild id={"about-box-mc"}>
                Minecraft was the game that helped me a lot with my coding journey.
                It allowed me to learn Java while adding new content to the game.
                Seeing my creations motivated me to keep going and learning more!
            </TextChild>

            <TextChild id={"about-box-servers"}>
                A huge part of my inspiration comes from servers like Hypixel and Mineplex.
                Looking at their creations, I was highly motivated to try and make something similar.
                This determination resulted in creation my own Minecraft server.

            </TextChild>

            <TextChild id={"about-box-today"}>
                Because of my creative past and communities, I've managed to build, today
                I'm surrounded by amazing people who love coding as much as I do.
                I'm glad they are part of my life and that I can share passions with them.

            </TextChild>

        </TextParent>
    </>;
}

export default AboutMe;