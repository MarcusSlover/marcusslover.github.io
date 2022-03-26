/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import TextParent from "../text/TextParent";
import React from "react";

const Welcome = () => {
    return <>
        <TextParent id={"welcome"}
                    title={"Welcome dear visitor!"}
                    color={"#76e111"}
                    img={"welcome"}
                    side={"left"}>
            Thank you for visiting my website!
            <br/>
            Here you can discover quite a few things about me and my projects.
            You can use the navigator above or your mouse wheel to learn more about me!
        </TextParent>
    </>;
}

export default Welcome;