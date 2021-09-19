import { Button } from "../Buttons/Button/Button";
import { ButtonLink } from "../Buttons/ButtonLink/ButtonLink";
import { Contacts } from "../UserCardParts/Contacts/Contacts";
import { FullName } from "../UserCardParts/FullName/FullName";
import { Photo } from "../UserCardParts/Photo/Photo";
import { Status } from "../UserCardParts/Status/Status";

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
      <Status status={props.user.aboutMe} />
      <Photo
        className={UsersListItemStyle.photo}
        id={props.user.id}
        fullName={props.user.name}
        image={props.user.photos}
      />

      <Contacts
        className={UsersListItemStyle.aboutUser}
        contacts={props.user.contacts}
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
