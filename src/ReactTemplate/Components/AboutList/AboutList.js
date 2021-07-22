import "./AboutList.css";

function AboutList(props) {
  return (
    <dl className={props.className + "about-me-list"}>
      <dt className="about-me-list__term">Дата рождения:</dt>
      <dd className="about-me-list__description">17.09.2004</dd>
      <dt className="about-me-list__term">Город:</dt>
      <dd className="about-me-list__description">
        <a className="about-me-list__link" href="#1">
          Калуга
        </a>
      </dd>
      <dt className="about-me-list__term">Учебное заведение:</dt>
      <dd className="about-me-list__description">
        <a className="about-me-list__link" href="#1">
          Калужский техникум электронных приборов
        </a>
      </dd>
      <dt className="about-me-list__term">Сайт:</dt>
      <dd className="about-me-list__description">
        <a
          className="about-me-list__link about-me-list__link_disable"
          href="#1"
        >
          Пусто
        </a>
      </dd>
    </dl>
  );
}

export default AboutList;
