import Picture from "../Picture/Picture";

import MessageStyle from "./Message.module.css";

function Message(props) {
  return (
    <li className={`${props.className ?? ""} ${MessageStyle.message}`}>
      <h5 className={MessageStyle.author}>Кирил Цыганков</h5>
      <Picture className={`${MessageStyle.photo} fake-photo`} alt="Аватарка" />
      <p className={MessageStyle.content}>
        Мело, мело по всей земле<br></br>
        Во все пределы. <br></br>
        Свеча горела на столе, <br></br>
        Свеча горела.<br></br>
        Как летом роем мошкара<br></br>
        Летит на пламя, <br></br>
        Слетались хлопья со двора<br></br>
        К оконной раме.<br></br>
        Метель лепила на стекле<br></br>
        Кружки и стрелы.<br></br>
        Свеча горела на столе, <br></br>
        Свеча горела. <br></br>
        На озаренный потолок <br></br>
        Ложились тени,<br></br>
        Скрещенья рук, скрещенья ног, <br></br>
        Судьбы скрещенья. <br></br>
        И падали два башмачка<br></br>
        Со стуком на пол.<br></br>
        И воск слезами с ночника <br></br>
        На платье капал. <br></br>
        И все терялось в снежной мгле<br></br>
        Седой и белой. <br></br>
        Свеча горела на столе, <br></br>
        Свеча горела. <br></br>
        На свечку дуло из угла,<br></br>
        И жар соблазна <br></br>
        Вздымал, как ангел, два крыла <br></br>
        Крестообразно. <br></br>
        Мело весь месяц в феврале, <br></br>
        И то и дело <br></br>
        Свеча горела на столе, <br></br>
        Свеча горела.
      </p>
    </li>
  );
}

export default Message;
