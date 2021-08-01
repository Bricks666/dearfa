import React from "react";
import Message from "../Message/Message";

import MessagesStyle from "./Messages.module.css";

/* Стоит поменять название, например поставить текущий чат или текущий диалог */
function Messages(props) {
  return (
    <ul
      className={`${props.className} ${MessagesStyle.messages}`}
      aria-label={`чат с ${props.who}`}
    >
      <Message author={props.who}>
        Мело, мело по всей земле<br></br>
        Во все пределы. <br></br>
        Свеча горела на столе, <br></br>
        Свеча горела.<br></br>
        Как летом роем мошкара<br></br>
        Летит на пламя, <br></br>
        Слетались хлопья со двора<br></br>К оконной раме.<br></br>
        Метель лепила на стекле<br></br>
        Кружки и стрелы.<br></br>
        Свеча горела на столе, <br></br>
        Свеча горела. <br></br>
        На озаренный потолок <br></br>
        Ложились тени,<br></br>
        Скрещенья рук, скрещенья ног, <br></br>
        Судьбы скрещенья. <br></br>И падали два башмачка<br></br>
        Со стуком на пол.<br></br>И воск слезами с ночника <br></br>
        На платье капал. <br></br>И все терялось в снежной мгле<br></br>
        Седой и белой. <br></br>
        Свеча горела на столе, <br></br>
        Свеча горела. <br></br>
        На свечку дуло из угла,<br></br>И жар соблазна <br></br>
        Вздымал, как ангел, два крыла <br></br>
        Крестообразно. <br></br>
        Мело весь месяц в феврале, <br></br>И то и дело <br></br>
        Свеча горела на столе, <br></br>
        Свеча горела.
      </Message>
      <Message author="Кирилл">
        Дааа, хороший стих, и Пастернак тоже хороший писатель был
      </Message>
      <Message author={props.who}>
        Что мы будем теперь с этой информацией делать?
      </Message>
      <Message author="Кирилл">Не знаю?</Message>
    </ul>
  );
}

export default Messages;
