/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */
import React from "react";
import TextParent from "../text/TextParent";
import TextChild from "../text/TextChild";
import TextSection from "../text/TextSection";

const Friends = () => {
    return <>
        <TextParent id={"friends"}
                    title={"My Friends"}
                    color={"#1180e1"}
                    img={"turtle"}
                    side={"left"}>
            As I love my friends very much, I've decided to make a spot for them here on my website.
            They are always there for me when I need them. So, I believe they deserve to be here as well.
            <TextChild id={"friend-sections"} sections={true}>
                <TextSection>

                </TextSection>
            </TextChild>

        </TextParent>
    </>;
}

export default Friends;