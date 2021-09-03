import { Button } from "../Buttons/Button/Button";
import { ButtonLink } from "../Buttons/ButtonLink/ButtonLink";
import { AboutUser } from "../UserCardParts/AboutUser/AboutUser";
import { FullName } from "../UserCardParts/FullName/FullName";
import { Photo } from "../UserCardParts/Photo/Photo";

import UsersListItemStyle from "./UsersListItem.module.css";

export const UsersListItem = (props) => {
  const onClick = () => {
    return props[props.user.isFriend ? "unfollowUser" : "followUser"](
      props.user.info.id
    );
  };

  return (
    <li
      className={`${UsersListItemStyle.itemWrapper} ${props.className ?? ""}`}
    >
      <FullName id={props.user.info.id} fullName={props.user.info.fullName} />
      <Photo
        className={UsersListItemStyle.photo}
        id={props.user.info.id}
        fullName={props.user.info.fullName}
        image={props.user.info.avatar}
      />

      <AboutUser
        className={UsersListItemStyle.aboutUser}
        about={props.user.info.about}
      />
      <ButtonLink
        className={UsersListItemStyle.link}
        to={`/dialogs/${props.user.info.id}`}
      >
        Написать
      </ButtonLink>
      <Button className={UsersListItemStyle.button} onClick={onClick}>
        {props.user.isFriend ? "Удалить из друзей" : "Добавить в друзья"}
      </Button>
    </li>
  );
};
