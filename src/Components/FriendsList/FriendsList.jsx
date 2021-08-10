import React from "react";
import { FriendsListItem } from "./FriendsListItem/FriendListItem";

import FriendsListStyle from "./FriendsList.module.css";

function FriendsList(props) {
    function RenderItem(friendsInfo, size) {
        return friendsInfo.map((friendInfo) => {
            return (
                <FriendsListItem
                    className={FriendsListStyle.item}
                    friendInfo={friendInfo}
                    size={size}
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
            {RenderItem(props.friendsInfo ?? [], props.size)}
        </ul>
    );
}

export { FriendsList };
