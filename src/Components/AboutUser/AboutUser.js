import "./AboutUser.css";

function AboutUser(props) {
  return (
    <dl className={props.className + " about-user"}>
      <dt className="about-user__term">Дата рождения:</dt>
      <dd className="about-user__description">17.09.2004</dd>
      <dt className="about-user__term">Город:</dt>
      <dd className="about-user__description">
        <a className="about-user__link" href="#1">
          Калуга
        </a>
      </dd>
      <dt className="about-user__term">Учебное заведение:</dt>
      <dd className="about-user__description">
        <a className="about-user__link" href="#1">
          Калужский техникум электронных приборов
        </a>
      </dd>
      <dt className="about-user__term">Сайт:</dt>
      <dd className="about-user__description">
        <a
          className="about-user__link about-user__link_disable"
          href="#1"
        >
          Пусто
        </a>
      </dd>
    </dl>
  );
}

export default AboutUser;
