/*
 * Copyright (c) 2022, MarcusSlover All rights reserved.
 */

import '../style/Header.css'
import marcusHead from '../style/img/mark_figure.png'

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