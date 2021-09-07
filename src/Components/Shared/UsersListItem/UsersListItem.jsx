import { Button } from "../Buttons/Button/Button";
import { ButtonLink } from "../Buttons/ButtonLink/ButtonLink";
import { AboutUser } from "../UserCardParts/AboutUser/AboutUser";
import { FullName } from "../UserCardParts/FullName/FullName";
import { Photo } from "../UserCardParts/Photo/Photo";

import UsersListItemStyle from "./UsersListItem.module.css";

export const UsersListItem = (props) => {
  const onClick = () => {
    return props[props.user.followed ? "unfollowUser" : "followUser"](
      props.user.id
    );
  };

  return (
    <li
      className={`${UsersListItemStyle.itemWrapper} ${props.className ?? ""}`}
    >
      <FullName id={props.user.id} fullName={props.user.name} />
      <Photo
        className={UsersListItemStyle.photo}
        id={props.user.id}
        fullName={props.user.name}
        image={props.user.photos}
      />

      <AboutUser
        className={UsersListItemStyle.aboutUser}
        about={props.user.about}
      />
      <ButtonLink
        className={UsersListItemStyle.link}
        to={`/dialogs/${props.user.id}`}
      >
        Написать
      </ButtonLink>
      <Button className={UsersListItemStyle.button} onClick={onClick}>
        {props.user.followed ? "Удалить из друзей" : "Добавить в друзья"}
      </Button>
    </li>
  );
};
