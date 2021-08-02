/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */
import React, {ReactNodeArray} from "react";
import TextParent from "../text/TextParent";
import TextChild from "../text/TextChild";
import TextSection from "../text/TextSection";
import {Friend, friends} from "../utils/DiscordUtil";

interface FriendObject {
    name: string;
    friend: Friend;
}

const Friends = () => {

    // Getting all the friends.
    const visibleFriends: Array<FriendObject> = [];
    friends.forEach(friend => visibleFriends.push({name: friend.name, friend}));
    visibleFriends.sort((a, b) => a.name.localeCompare(b.name));

    // Creation of friend elements.
    const sections: ReactNodeArray = [];
    visibleFriends.forEach(e => {
        const friend: Friend | undefined = friends.find(f => f.name === e.name);
        if (friend !== undefined) {
            const section = <TextSection friendData={friend}/>;
            sections.push(section);
        }
    });

    // Html layout
    return <>
        <TextParent id={"friends"}
                    title={"My Friends"}
                    color={"#116fe1"}
                    img={"turtle"}
                    side={"left"}>
            As I love my friends very much, I've decided to make a spot for them here on my website.
            They are always there for me when I need them. So, I believe they deserve to be here as well.

            <TextChild id={"friend-sections"}>
                {sections}
            </TextChild>
        </TextParent>
    </>;
};

export default Friends;