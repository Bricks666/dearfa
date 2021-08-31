import { Link } from "react-router-dom";
import { Picture } from "../../Picture/Picture";

import PhotoStyle from "./Photo.module.css";

export const Photo = (props) => {
  return (
    <Link
      className={`${PhotoStyle.link} ${props.className ?? ""}`}
      to={`/profile/${props.id}`}
      title={props.fullName}
    >
      <Picture
        className={`fake-photo ${PhotoStyle.photo}`}
        oneXSrc={props.image.url}
        alt={props.image.alt}
      />
    </Link>
  );
};
