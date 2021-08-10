import React from "react";
import { FriendsList } from "../FriendsList/FriendsList";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

const friends = [
    {
        fullName: "Антонина",
        image: {
            url: "/Images/ProfileBackground/SunSet",
        },
        about: [
            { term: "Дата рождения", description: "12.10.2000" },
            {
                term: "Сайт",
                description: "Wikipedia",
                href: "https://ru.wikipedia.com",
            },
        ],
    },
    {
        fullName: "Кеша",
        image: {
            url: "/Images/ProfileBackground/SunSet",
        },
        about: [
            { term: "Дата рождения", description: "12.10.2000" },
            {
                term: "Сайт",
                description: "Wikipedia",
                href: "https://ru.wikipedia.com",
            },
        ],
    },
    {
        fullName: "Максим",
        image: {
            url: "/Images/ProfileBackground/SunSet",
        },
        about: [
            { term: "Дата рождения", description: "12.10.2000" },
            {
                term: "Сайт",
                description: "Wikipedia",
                href: "https://ru.wikipedia.com",
            },
        ],
    },
];

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
                friendsInfo={friends}
            />
        </aside>
    );
}

export { FavoritFriends };
