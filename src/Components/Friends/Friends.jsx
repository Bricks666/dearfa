import { FriendsList } from "../FriendsList/FriendsList";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import FriendsStyle from "./Friends.module.css";

const friends = [
    {
        id: 1,
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
        id: 15,
        fullName: "Кеша",
        image: {
            url: "/Images/ProfileBackground/SunSet",
        },
        about: [
            { term: "Дата рождения", description: "12.09.2000" },
            {
                term: "Сайт",
                description: "VK",
                href: "https://www.vk.com",
            },
        ],
    },
    {
        id: 35,
        fullName: "Максим",
        image: {
            url: "/Images/ProfileBackground/SunSet",
        },
        about: [
            { term: "Дата рождения", description: "12.00.2000" },
            {
                term: "Сайт",
                description: "4pda",
                href: "https://4pda.to",
            },
        ],
    },
];

export function Friends(props) {
    return (
        <main className={props.className}>
            <SectionHeader>Друзья</SectionHeader>
            <FriendsList
                className={FriendsStyle.list}
                size="medium"
                friends={props.data}
            />
        </main>
    );
}
