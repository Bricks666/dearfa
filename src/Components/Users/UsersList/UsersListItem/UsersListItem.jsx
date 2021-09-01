import { Button } from "../../../Shared/Buttons/Button/Button";
import { UsersListItemPart } from "../../../Shared/UsersListItemPart/UsersListItemPart";
import { ButtonLink } from "../../../Shared/Buttons/ButtonLink/ButtonLink";

import UsersListItemStyle from "./UsersListItem.module.css";

export const UsersListItem = (props) => {
  return (
    <li
      className={`${UsersListItemStyle.itemWrapper} ${props.className ?? ""}`}
    >
      <UsersListItemPart
        className={UsersListItemStyle.item}
        user={props.user}
      />
      <ButtonLink
        className={UsersListItemStyle.link}
        to={`/dialogs/${props.user.id}`}
      >
        Написать
      </ButtonLink>
      <Button
        className={UsersListItemStyle.button}
        onClick={() => props.followUser(props.user.id)}
      >
        Добавить в друзья
      </Button>
    </li>
  );
};
