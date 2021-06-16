/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import '../style/Header.css'
import marcusHead from '../style/img/marcus_head.png'

const Header = () => {
    return <div id="header">
        <span className="logo header-logo">
            <img src={marcusHead}/>
        </span>
        <a href="#about" className="about header-button">About</a>
        <a href="#creations" className="creations header-button">Creations</a>
        <a href="#github" className="github header-button">GitHub</a>
        <a href="#friends" className="friends header-button">Friends</a>
    </div>;
}

export default Header;