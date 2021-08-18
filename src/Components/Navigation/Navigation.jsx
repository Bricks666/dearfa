import React from "react";
import { RenderNavigation } from "./RenderNavigation";

import NavigationStyle from "./Navigation.module.css";

function Navigation(props) {
    const navigationItems = [
        {
            path: "/profile/1",
            content: "Профиль",
        },
        {
            path: "/dialogs",
            content: "Сообщения",
        },
        {
            path: "/friends",
            content: "Друзья",
        },
        {
            path: "/news",
            content: "Новости",
        },
        {
            path: "/music",
            content: "Музыка",
        },
        {
            path: "/settings",
            content: "Настройки",
        },
    ];
    return (
        <nav
            className={`${props.className ?? ""} ${NavigationStyle.navigation}`}
        >
            <ul className={NavigationStyle.list}>
                {RenderNavigation(navigationItems)}
            </ul>
        </nav>
    );
}

export { Navigation };
