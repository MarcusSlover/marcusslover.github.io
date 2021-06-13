import React from 'react'
import './style/Header.css'
import marcusHead from './style/img/marcus_head.png'

export default class Header extends React.Component {

    render(): React.ReactNode {
        return <div id="header">
            <span className="logo header-logo">
                <img src={marcusHead}/>
            </span>

            <a href="#" className="home header-button">home()</a>
            <a href="#about" className="about header-button">about()</a>
            <a href="#creations" className="creations header-button">creations()</a>
            <a href="#github" className="github header-button">github()</a>
            <a href="#friends" className="friends header-button">friends()</a>
        </div>
    }
}