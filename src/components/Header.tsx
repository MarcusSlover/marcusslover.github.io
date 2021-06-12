import React from 'react'
import './style/Header.css'

export default class Header extends React.Component {
    render(): React.ReactNode {
        return <div id="header">
            <span className="home header-button">home()</span>
            <span className="about header-button">about()</span>
            <span className="creations header-button">creations()</span>
            <span className="github header-button">github()</span>
            <span className="friends header-button">friends()</span>
        </div>
    }
}