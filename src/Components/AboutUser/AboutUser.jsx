import React from "react";
import { AboutUserItem } from "./AboutUserItem/AboutUserItem";

import AboutUserStyle from "./AboutUser.module.css";
/* Сомнительное решение отделить термин с определением в отдельный компонент,
Потому что пришлось выделить все классы для него в отдельный файл, что затрудняет последующее использование
*/
function AboutUser(props) {
    function RenderItem(aboutUser) {
        return aboutUser.map((item, index) => {
            return (
                <AboutUserItem
                    term={item.term}
                    description={item.description}
                    href={item.href}
                    key={index}
                />
            );
        });
    }

    return (
        <dl className={`${props.className ?? ""} ${AboutUserStyle.aboutUser}`}>
            {RenderItem(props.aboutUser ?? [])}
        </dl>
    );
}

export { AboutUser };
