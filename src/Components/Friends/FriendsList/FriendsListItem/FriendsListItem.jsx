import { UsersListItemPart } from "../../../Shared/UsersListItemPart/UsersListItemPart";
import { Button } from "../../../Shared/Buttons/Button/Button";
import { ButtonLink } from "../../../Shared/Buttons/ButtonLink/ButtonLink";

import FriendsListItemStyle from "./FriendsListItem.module.css";

export const FriendsListItem = (props) => {
  return (
    <li className={FriendsListItemStyle.itemWrapper}>
      <UsersListItemPart
        className={FriendsListItemStyle.item}
        user={props.friend}
      />
      <ButtonLink
        className={FriendsListItemStyle.link}
        to={`/dialogs/${props.friend.id}`}
      >
        Написать
      </ButtonLink>
      <Button
        className={FriendsListItemStyle.button}
        onClick={() => props.unfollowUser(props.friend.id)}
      >
        Удалить из друзей
      </Button>
    </li>
  );
};
