import React from "react";
import { FriendsListItem } from "./FriendsListItem/FriendListItem";

import FriendsListStyle from "./FriendsList.module.css";

function FriendsList(props) {
    function RenderItem(friends, size) {
        return friends.map((friend) => {
            return (
                <FriendsListItem
                    className={FriendsListStyle.item}
                    friend={friend.getInfo()}
                    size={size}
                    key={friend.id}
                />
            );
        });
    }

    return (
        <ul
            className={`${FriendsListStyle.list} ${
                FriendsListStyle[props.size] ?? ""
            } ${props.className ?? ""} `}
        >
            {RenderItem(props.friends ?? [], props.size)}
        </ul>
    );
}

export { FriendsList };
