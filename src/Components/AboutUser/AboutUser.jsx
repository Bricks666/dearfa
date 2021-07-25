import AboutUserItem from "./AboutUserItem/AboutUserItem";

import AboutUserStyle from "./AboutUser.module.css";
/* Сомнительное решение отделить термин с определением в отдельный компонент,
Потому что пришлось выделить все классы для него в отдельный файл, что затрудняет последующее использование
*/
function AboutUser(props) {
  return (
    <dl className={`${props.className ?? ""} ${AboutUserStyle.aboutUser}`}>
      <AboutUserItem term="Дата рождения:" description="17.09.2004" isDisable />
      <AboutUserItem term="Город:" description="Калуга" href="#1" />
      <AboutUserItem
        term="Учебное заведение:"
        description="Калужский техникум электронных приборов"
        href="#1"
      />
      <AboutUserItem term="Сайт:" description="Пусто" isDisable />
    </dl>
  );
}

export default AboutUser;
