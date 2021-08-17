import React from "react";
import { FriendsList } from "../FriendsList/FriendsList";
import { SubsectionHeader } from "../SubsectionHeader/SubsectionHeader";

import FavoritFriendsStyle from "./FavoritFriends.module.css";

const friends = [
    {
        id: 156,
        fullName: "Антонина",
        avatar: {
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
        getInfo() {
            return this;
        },
    },
    {
        id: 156455,
        fullName: "Кеша",
        avatar: {
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
        getInfo() {
            return this;
        },
    },
    {
        id: 5,
        fullName: "Максим",
        avatar: {
            url: "/Images/ProfileBackground/SunSet",
            alt: "asd",
        },
        about: [
            { term: "Дата рождения", description: "12.10.2000" },
            {
                term: "Сайт",
                description: "Wikipedia",
                href: "https://ru.wikipedia.com",
            },
        ],
        getInfo() {
            return this;
        },
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
                friends={friends}
            />
        </aside>
    );
}

export { FavoritFriends };
