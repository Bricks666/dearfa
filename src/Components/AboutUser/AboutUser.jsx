import AboutUserStyle from "./AboutUser.module.css";

function AboutUser(props) {
  return (
    <dl className={`${props.className?? ""} ${AboutUserStyle.aboutUser}`}>
      <dt className={AboutUserStyle.term}>Дата рождения:</dt>
      <dd className={AboutUserStyle.description}>17.09.2004</dd>
      <dt className={AboutUserStyle.term}>Город:</dt>
      <dd className={AboutUserStyle.description}>
        <a className={AboutUserStyle.link} href="#1">
          Калуга
        </a>
      </dd>
      <dt className={AboutUserStyle.term}>Учебное заведение:</dt>
      <dd className={AboutUserStyle.description}>
        <a className={AboutUserStyle.link} href="#1">
          Калужский техникум электронных приборов
        </a>
      </dd>
      <dt className={AboutUserStyle.term}>Сайт:</dt>
      <dd className={AboutUserStyle.description}>
        <a
          className={`${AboutUserStyle.link} ${AboutUserStyle.link_disable}`}
          href="#1"
        >
          Пусто
        </a>
      </dd>
    </dl>
  );
}

export default AboutUser;
