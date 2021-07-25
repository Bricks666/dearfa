import AboutUserItemStyle from "./AboutUserItem.module.css";

function AboutUserItem(props) {
  return (
    <div className={AboutUserItemStyle.interlayer}>
      <dt className={AboutUserItemStyle.term}>{props.term}</dt>
      <dd className={AboutUserItemStyle.description}>
        <a
          className={`${AboutUserItemStyle.link} ${
            props.isDisable ? AboutUserItemStyle.link_disable : ""
          }`}
          href={props.href}
        >
          {props.description}
        </a>
      </dd>
    </div>
  );
}

export default AboutUserItem;
