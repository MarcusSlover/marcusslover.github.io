/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import TextParent from "../text/TextParent";
import React from "react";

const ThankYouPurchase = () => {
    return <>
        <TextParent id={"thankYouPurchase"}
                    title={"Successful Payment"}
                    color={"#ff2c5f"}
                    img={"heart"}
                    side={"left"}>
            Thank you for choosing my service!
            <br/>
            I always try my best to satisfy my customers.
            I'm very thankful and glad that I could work with you.
            Enjoy and I wish you a great day!
        </TextParent>
    </>;
}

export default ThankYouPurchase;