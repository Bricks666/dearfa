import "./Logo.css";

function Logo(props) {
  return (
    <a className={props.className + " logo"} href="./index">
      <img className="logo__image" src={props.src} alt={props.alt} />
    </a>
  );
}

export default Logo;
