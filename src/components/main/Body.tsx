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
                fulfill part of my creativity and helped me making a step into the "world" of programming.
            </TextBox>

            <TextBox id={"about-box-cpp"}>
                Surprisingly, as I moved on I started watching C++ tutorials.
                At the time, I was creating simple programs that would calculate or solve
                certain problems. Sadly, since then I haven't fallen in "love" with that language at all...
            </TextBox>

        </TextHeader>

        <TextHeader id={"creations"}
                    title={"My Creations"}
                    color={"#0cabc9"}
                    img={"creations"}
                    side={"left"}>
            Pretty much most of my creations have to do something with Minecraft.
            I absolutely love developing Minecraft plugins. Once, I even created my fully custom network!
            There are probably even some YouTube videos about SloverTeam Network.

            <TextBox id={"creations-box-corpus"}
                     img={"corpusmc"}>
                <b><u>CorpusMc</u></b>
                <br/>
                My biggest project of all time.
                It's a Minecraft network containing lots of custom game modes and mechanics.
                It's still under development & hasn't been released yet.
            </TextBox>

            <TextBox id={"creations-box-fishing"}
                     img={"blue_fish"}>
                <b><u>FishingPlus</u></b>
                <br/>
                A Minecraft plugin that makes fishing better & more interesting!
                Adds tons of new content and quests. Get your rods and start working!
                Currently in heavy development.
            </TextBox>

            <TextBox id={"creations-box-caverns"}
                     img={"emerald"}>
                <b><u>Caverns</u></b>
                <br/>
                The Caverns is a plugin based on one of the games from a Minecraft server called DiamondFire.
            </TextBox>

            <TextBox id={"creations-fruits"}
                     img={"dark_strawberries"}>
                <b><u>SloverFruits</u></b>
                <br/>
                A Minecraft Mod that adds new eatable items to the game.
                The mod aims to provide the players with more eatable content
                such as fruits, vegetables, plants, and even smoothies!
            </TextBox>

            <TextBox id={"creations-box-survival"}
                     img={"campfire"}>
                <b><u>SloverSurvivalReborn</u></b>
                <br/>
                It is an open-source Minecraft plugin that attempts to improve your survival experience.
                The plugin has lots of custom features that hopefully makes you enjoy the game more.
                It was designed to be used for SMP servers.
            </TextBox>

            <TextBox id={"creations-hologram"}
                     img={"sign"}>
                <b><u>SloverHologram</u></b>
                <br/>
                A simple Spigot plugin that allows creating custom floating texts (commonly known as holograms).
                This plugin was designed to work on Minecraft version: 1.12.2
            </TextBox>

        </TextHeader>

    </div>;
}

export default Body;
