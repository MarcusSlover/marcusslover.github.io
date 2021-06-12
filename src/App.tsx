import React from 'react';
import './App.css';

function App() {
    const
        home = "home(\"marcus\")",
        creations = "creations()",
        github = "github()",
        about = "about()";

    const logo = "https://crafatar.com/renders/body/398c7569-3f15-4998-b0d9-be91a9ac935c?overlay&scale=10";

    return (
        <div className="App">

            {/*Website header*/}
            <header className={"header"}>

                {/*Navigation bar*/}
                <div className={"navigation"}>
                    <nav>
                        <ul>
                            <li><a href={"#home"}>
                                <div>{home}</div>
                            </a></li>
                            <li><a href={"#about"}>
                                <div>{about}</div>
                            </a></li>
                            <li><a href={"#creations"}>
                                <div>{creations}</div>
                            </a></li>
                            <li><a href={"#github"}>
                                <div>{github}</div>
                            </a></li>
                        </ul>
                    </nav>
                </div>

            </header>

            <header className={"about"}>

                <span className={"upper"}>

                    <section className={"figure"}>
                        <img src={logo}/>
                    </section>

                    <section className={"box"}>
                    </section>

                    <section className={"about-text"}>
                        <text>{"\""}</text>
                        <br/>
                        <text>  Hi! I am Marcus.</text>
                        <br/>
                        <text>  I'm 18 years old and programming is my passion."</text>
                        <br/>
                        <text>{"\""}</text>
                    </section>
                </span>
            </header>
        </div>
    );
}

export default App;
