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
            {console.log(props.friendInfo)}
            <Link
                to={`/profile/${props.friendInfo.id}`}
                className={FriendsListItemStyle.link}
                title={props.friendInfo.fullName}
            >
                <h4 className={FriendsListItemStyle.name}>
                    {props.friendInfo.fullName}
                </h4>
            </Link>

            <Link
                to={`/profile/${props.friendInfo.id}`}
                className={`${FriendsListItemStyle.link} ${FriendsListItemStyle.link_photo}`}
            >
                <Picture
                    className={`${FriendsListItemStyle.photo}`}
                    oneXSrc={props.friendInfo.image.url}
                    alt={`Аватарка ${props.friendInfo.fullName}`}
                />
            </Link>

            <AboutUser
                className={FriendsListItemStyle.aboutUser}
                aboutUser={props.friendInfo.about}
            />
        </li>
    );
}

export { FriendsListItem };
