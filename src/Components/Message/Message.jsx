import React from "react";
import { Picture } from "../Picture/Picture";

import MessageStyle from "./Message.module.css";

/*
Подумать об выносе содержания сообщения в отдельное место,
Добавлении в данные id, даты публикации и иных сопроводительных данных
*/

function Message(props) {
    return (
        <article className={`${props.className ?? ""} ${MessageStyle.message}`}>
            <Picture
                className={`${MessageStyle.photo} fake-photo`}
                oneXSrc="/Images/PhotoCap/PhotoCap"
                alt={`Аватарка ${props.author}`}
            />
            <p className={MessageStyle.content}>
                <h5 className={MessageStyle.author}>{props.author}</h5>
                {props.children}
            </p>
        </article>
    );
}

export { Message };
