/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */
import React from "react";
import "../../style/Text.css"

export interface TextSectionProps {
    id: string;
    discordUser?: string;
}

const TextSection: React.FC<TextSectionProps> = ({id, discordUser, children}) => {
    const discordImage = createDiscord(discordUser);
    return <span className={"text-section"}>
        {discordImage}
    </span>;
};

const createDiscord = (discordUser?: string) => {
    if (discordUser !== undefined) {
        return <div className={"discord"}>

        </div>;
    } else {
        return <>
        </>;
    }
};

export default TextSection;

