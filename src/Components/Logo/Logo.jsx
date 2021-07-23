import LogoStyle from "./Logo.module.css";

function Logo(props) {
  return (
    <a className={`${props.className} ${LogoStyle.logo}`} href="./index">
      <img className={LogoStyle.image} src={props.src} alt={props.alt} />
    </a>
  );
}

export default Logo;
