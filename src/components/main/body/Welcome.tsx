/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import TextHeader from "../utils/TextHeader";
import React from "react";

const Welcome = () => {
    return <>
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
    </>;
}

export default Welcome;