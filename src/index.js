import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Page } from "./Components/Page/Page";

const data = new Map();
data
  .set(1, {
    info: {
      id: 1,
      fullName: "Кирилл Цыганков",
      avatar: {
        url: "/Images/Ava/Cosmic-animals",
        alt: "Аватарка...",
      },
      backgroundPhoto: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "Ваш фон...",
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
    },
    chats: [
      {
        id: 2,
        messages: [
          { id: 1, message: "sdfsdff" },
          { id: 2, message: "Смотри что могу" },
          {
            id: 2,
            message:
              "Крокодилы танцуют на песке, будто ты попросил их там побыть",
          },
          { id: 1, message: "Я тоже так могу" },
        ],
      },
    ],
    friends: [
      {
        id: 2,
        getInfo() {
          return data.get(this.id).info;
        },
      },
    ],
  })
  .set(2, {
    info: {
      id: 2,
      fullName: "Фридрих Фон Ниц",
      avatar: {
        url: "/Images/Ava/Cosmic-animals",
        alt: "Аватарка...",
      },
      backgroundPhoto: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "Ваш фон...",
      },
      about: [
        { term: "Дата рождения", description: "12.12.2000" },
        {
          term: "Город",
          description: "Калуга",
          href: "https://ru.wikipedia.org/wiki/Калуга",
        },
        {
          term: "Сайт",
          description: "Wikipedia",
          href: "https://wikipedia.com",
        },
      ],
    },
    chats: [
      {
        id: 1,
        messages: [
          { id: 1, message: "sdfsdff" },
          { id: 2, message: "Смотри что могу" },
          {
            id: 2,
            message:
              "Крокодилы танцуют на песке, будто ты попросил их там побыть",
          },
          { id: 1, message: "Я тоже так могу" },
        ],
      },
    ],
    friends: [
      {
        id: 1,
        getInfo() {
          return data.get(this.id).info;
        },
      },
    ],
  });

ReactDOM.render(
  <React.StrictMode>
    <Page data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
