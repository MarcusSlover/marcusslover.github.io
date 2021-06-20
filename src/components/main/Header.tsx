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
        <a href="#about" className="about-button header-button">About</a>
        <a href="#creations" className="creations-button header-button">Creations</a>
        <a href="#friends" className="friends-button header-button">Friends</a>
        <a href="https://github.com/MarcusSlover" className="github-button header-button">GitHub</a>
    </div>;
}

export default Header;