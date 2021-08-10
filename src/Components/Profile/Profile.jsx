import React from "react";
import { Picture } from "../Picture/Picture";
import { Posts } from "../Posts/Posts";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { UserInfo } from "../UserInfo/UserInfo";

import ProfileStyle from "./Profile.module.css";

const userInfo = {
    fullName: "Кирилл Цыганков",
    image: {
        url: "/Images/Ava/Cosmic-animals",
    },
    about: [
        { term: "Дата рождения", description: "17.09.2004" },
        {
            term: "Город",
            description: "Калуга",
            href: "https://ru.wikipedia.org/wiki/Калуга",
        },
        {
            term: "Учебное заведение",
            description: "Калужский техникум электронных приборов",
            href: "https://ktep40.ru",
        },
        { term: "Сайт", description: "Пусто" },
    ],
};

function Profile(props) {
    return (
        <main className={`${props.className ?? ""} ${ProfileStyle.profile}`}>
            <SectionHeader className="visibility-hidden">Профиль</SectionHeader>
            <Picture
                className={`${ProfileStyle.image} fake-photo`}
                oneXSrc="/Images/ProfileBackground/SunSet"
                alt="Ваш фон"
            />
            <UserInfo className={ProfileStyle.userInfo} user={userInfo} />
            <Posts className={ProfileStyle.posts} />
        </main>
    );
}

export { Profile };
