import React from 'react';
import './style/About.css'
import Text from './Tools'

export default class About extends React.Component {
    render(): React.ReactNode {
        return <div id="about">
            <section id="about-text">

                <Text img={"cactus"}>
                    I'm Marcus and welcome to my website!
                    <br/>
                    Programming is one of my greatest passions.
                    <br/>
                    Here you can discover quite a few things about me and my projects.
                </Text>

            </section>

        </div>
    }
}
