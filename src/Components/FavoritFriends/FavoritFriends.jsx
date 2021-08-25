import React from "react";
import { FriendsList } from "../FriendsList/FriendsList";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

function FavoritFriends(props) {
    return (
        <aside
            className={`${FavoritFriendsStyle.lastCommunications} ${
                props.className ?? ""
            }`}
        >
            <SubsectionHeader className>Избранные друзья</SubsectionHeader>
            <FriendsList
                className={FavoritFriendsStyle.friendsList}
                size="small"
                friends={props.friends}
                dispatch={props.dispatch}
            />
        </aside>
    );
}

export { FavoritFriends };
