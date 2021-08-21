import React from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../Picture/Picture";
import { AboutUser } from "../../AboutUser/AboutUser";

import FriendsListItemStyle from "./FriendListItem.module.css";

function FriendsListItem(props) {
    return (
        <li
            className={`${FriendsListItemStyle.item}
             ${props.className ?? ""} ${
                FriendsListItemStyle[props.size] ?? ""
            }`}
        >
            <Link
                to={`/profile/${props.friend.id}`}
                className={FriendsListItemStyle.link}
                title={props.friend.fullName}
            >
                <h4 className={FriendsListItemStyle.name}>
                    {props.friend.fullName}
                </h4>
            </Link>

            <Link
                to={`/profile/${props.friend.id}`}
                className={`${FriendsListItemStyle.link} ${FriendsListItemStyle.link_photo}`}
            >
                <Picture
                    className={`${FriendsListItemStyle.photo}`}
                    oneXSrc={props.friend.avatar.url}
                    alt={props.friend.avatar.alt}
                />
            </Link>

            <AboutUser
                className={FriendsListItemStyle.aboutUser}
                aboutUser={props.friend.about}
            />
        </li>
    );
}

export { FriendsListItem };