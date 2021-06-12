import React from 'react';
import './style/App.css';
import { createNavigation } from './Tools'

function App() {
    const nav = createNavigation(["home(\"marcus\")", "creations"]);
    const skin = "https://crafatar.com/renders/body/398c7569-3f15-4998-b0d9-be91a9ac935c?overlay&scale=10";

    return (
        <div className="App">

            {/*Website header*/}
            <header className="header">
                {/*Navigation bar*/}
                <div className="navigation">
                    <nav>
                        <ul>
                            <li><a href="#home">
                                <div>{nav[0]}</div>
                            </a></li>
                            <li><a href="#about">
                                <div>{nav[1]}</div>
                            </a></li>
                            <li><a href="#creations">
                                <div>{nav[2]}</div>
                            </a></li>
                            <li><a href="#github">
                                <div>{nav[3]}</div>
                            </a></li>
                            <li><a href="#friends">
                                <div>{nav[4]}</div>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/*About me*/}
            <section className="about" id="about">
                <span className="figure">
                    <img src={skin}/>
                </span>
            </section>

            {/*Website footer*/}
            <footer>

            </footer>
        </div>
    );
}

export default App;
