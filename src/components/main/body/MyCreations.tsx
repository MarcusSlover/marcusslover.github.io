/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import TextChild from "../text/TextChild";
import TextParent from "../text/TextParent";
import React from "react";

const MyCreations = () => {
    return <>
        <TextParent id={"creations"}
                    title={"My Creations"}
                    color={"#0cabc9"}
                    img={"creations"}
                    side={"left"}>
            Pretty much most of my creations have to do something with Minecraft.
            I absolutely love developing Minecraft plugins. Once, I even created my fully custom network!
            There are probably even some YouTube videos about SloverTeam Network.

            <TextChild id={"creations-box-rp"}
                       img={"rp"}
                       github={"https://github.com/MarcusSlover/ResourcePacker"}
            >
                <b>ResourcePacker</b>
                <br/>
                A program written in Java that lets you create Minecraft resource packs
                in a really efficient way. Bring custom items, blocks, and menus to life!
            </TextChild>

            <TextChild id={"creations-box-corpus"}
                       img={"corpusmc"}>
                <b>CorpusMc</b>
                <br/>
                My biggest project of all time.
                It's a Minecraft network containing lots of custom game modes and mechanics.
                It's still under development & hasn't been released yet.
            </TextChild>

            <TextChild id={"creations-box-fishing"}
                       img={"blue_fish"}
                       github={"https://github.com/MarcusSlover/FishingPlus"}>
                <b>FishingPlus</b>
                <br/>
                A Minecraft plugin that makes fishing better & more interesting!
                Adds tons of new content and quests. Get your rods and start working!
                Currently in heavy development.
            </TextChild>

            <TextChild id={"creations-box-caverns"}
                       img={"emerald"}
                       github={"https://github.com/MarcusSlover/Caverns"}>
                <b>Caverns</b>
                <br/>
                The Caverns is a plugin based on one of the games from a Minecraft server called DiamondFire.
            </TextChild>

            <TextChild id={"creations-fruits"}
                       img={"strawberries"}>
                <b>SloverFruits</b>
                <br/>
                A Minecraft Mod that adds new eatable items to the game.
                The mod aims to provide the players with more eatable content
                such as fruits, vegetables, plants, and even smoothies!
            </TextChild>

            <TextChild id={"creations-box-survival"}
                       img={"campfire"}
                       github={"https://github.com/MarcusSlover/SloverSurvivalReborn"}>
                <b>SloverSurvivalReborn</b>
                <br/>
                It is an open-source Minecraft plugin that attempts to improve your survival experience.
                The plugin has lots of custom features that hopefully makes you enjoy the game more.
                It was designed to be used for SMP servers.
            </TextChild>

            <TextChild id={"creations-hologram"}
                       img={"hologram_sign"}>
                <b>SloverHologram</b>
                <br/>
                A simple Spigot plugin that allows creating custom floating texts (commonly known as holograms).
                This plugin was designed to work on Minecraft version: 1.12.2
            </TextChild>

        </TextParent>
    </>;
}

export default MyCreations;