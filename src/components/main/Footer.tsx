/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */
import React from "react";
import "../style/Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();

    return <div id={"footer"}>
        MarcusSlover {year} &copy; All rights reserved.
    </div>
}

export default Footer;