/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import '../style/Header.css'
import marcusHead from '../style/img/marcus_head.png'
import {useRef} from "react";

const Header = () => {
    return <div id="header">
        <span className="logo header-logo">
            <img src={marcusHead}/>
        </span>
        <a href={"./#about"} className="header-button">About</a>
        <a href={"./#creations"} className="header-button">Creations</a>
        <a href={"./#friends"} className="header-button">Friends</a>
        <a href={"https://github.com/MarcusSlover"} className="header-button">GitHub</a>
    </div>;
}

export default Header;