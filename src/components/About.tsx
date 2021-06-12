import React from 'react';
import './style/About.css'
import Text from './Tools'

export default class About extends React.Component {
    render(): React.ReactNode {
        return <div id="about">
            <section id="about-text">
                <img src="https://crafatar.com/renders/body/398c7569-3f15-4998-b0d9-be91a9ac935c?overlay&scale=10"/>
                <Text>
                    Hello dear visitor! I'm Marcus and welcome to my website!
                    <br/>
                    Programming is one of my greatest passions.
                </Text>
            </section>

        </div>
    }
}
