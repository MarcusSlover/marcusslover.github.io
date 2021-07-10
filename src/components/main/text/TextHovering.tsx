/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import React from 'react';

export interface TextHoveringProps {
    discord?: string;
    namemc?: string;
    github?: string;
    website?: string;
}

const TextHovering: React.FC<TextHoveringProps> = ({discord, namemc, github, website, children}) => {
    const body = createComponent(discord, namemc, github, website)
    return <div className={"text-hovering"}>{body}</div>;
}

const createComponent = (discord?: string, namemc?: string, github?: string, website?: string): React.ReactElement => {
    return <>
        {discord !== undefined && createDiscord(discord)}
    </>
}

const createDiscord = (discord: string): React.ReactElement => {
    return <span className={"discord"}>
        {discord}
        <img src={require("../../style/img/discord_logo.svg").default}></img>
    </span>
}

export default TextHovering;

