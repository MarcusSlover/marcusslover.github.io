/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */
import React from "react";
import "../../style/Text.css"
import {Friend} from "../utils/DiscordUtil";
import {Color} from "../utils/ColorUtil";
import {createBackStyle} from "./TextChild";
import {createLogoStyle} from "./TextUtil";

export interface TextSectionProps {
    friendData?: Friend;
    color?: string;
    background?: string;
}

const TextSection: React.FC<TextSectionProps> = ({friendData, color, background, children}) => {
    const childColor = color || Color.color;
    const childBackgroundColor = background || Color.backgroundColor;

    const friend = (friendData !== undefined) ? createFromFriend(friendData) : undefined;
    const backStyle = createBackStyle(childColor, childBackgroundColor);

    return <section className={"section"} style={backStyle}>{friend}</section>;
}

const createFromFriend = (friendData: Friend): React.ReactElement => {
    const {avatarHash, clientId, name, job} = friendData;
    const friendImage = () => {
        let avatar;
        if (avatarHash !== undefined && clientId !== undefined) {
            const logoStyle = createLogoStyle(4);
            avatar = <div className={"avatar"}>
                   <img className={"logo"} draggable={false} style={logoStyle}
                        src={"https://cdn.discordapp.com/avatars/" + clientId + "/" + avatarHash}
                        alt={"Avatar"}/>
            </div>;
        }
        const nameComponent = <h4>{name}</h4>;
        const infoComponent = <h5>{job}</h5>;

        return <>
            {avatar !== undefined && avatar}
            <div className={"info"}>
                {nameComponent}
                {infoComponent}
            </div>
        </>;
    };
    return <>{friendImage()}</>;
}

export default TextSection;

