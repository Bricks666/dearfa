import React from "react";
import { Message } from "../Message/Message";

import MessagesStyle from "./Messages.module.css";

/* Стоит поменять название, например поставить текущий чат или текущий диалог */
function Messages(props) {
    const RenderMessages = (messages) => {
        return messages.map((message) => {
            return <Message author={message.id}>{message.message}</Message>;
        });
    };

    return (
        <section
            className={`${props.className} ${MessagesStyle.messages}`}
            aria-label={`чат с ${props.data.id}`}
        >
            {RenderMessages(props.data.messages)}
            {/*             <Message author={props.name}>
                Мело, мело по всей земле
                <br />
                Во все пределы. <br />
                Свеча горела на столе, <br />
                Свеча горела.
                <br />
                Как летом роем мошкара
                <br />
                Летит на пламя, <br />
                Слетались хлопья со двора
                <br />К оконной раме.
                <br />
                Метель лепила на стекле
                <br />
                Кружки и стрелы.
                <br />
                Свеча горела на столе, <br />
                Свеча горела. <br />
                На озаренный потолок <br />
                Ложились тени,
                <br />
                Скрещенья рук, скрещенья ног, <br />
                Судьбы скрещенья. <br />И падали два башмачка
                <br />
                Со стуком на пол.
                <br />И воск слезами с ночника <br />
                На платье капал. <br />И все терялось в снежной мгле
                <br />
                Седой и белой. <br />
                Свеча горела на столе, <br />
                Свеча горела. <br />
                На свечку дуло из угла,
                <br />И жар соблазна <br />
                Вздымал, как ангел, два крыла <br />
                Крестообразно. <br />
                Мело весь месяц в феврале, <br />И то и дело <br />
                Свеча горела на столе, <br />
                Свеча горела.
            </Message>
            <Message author="Кирилл">
                Дааа, хороший стих, и Пастернак тоже хороший писатель был
            </Message>
            <Message author={props.name}>
                Что мы будем теперь с этой информацией делать?
            </Message>
            <Message author="Кирилл">Не знаю?</Message> */}
        </section>
    );
}

export { Messages };
