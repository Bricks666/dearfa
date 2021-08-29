import { FriendsListItem } from "./FriendListItem";
import { removeFriendActionCreator } from "../../../Redux/ActionCreators/removeFriend";

export const FriendListItemContainer = (props) => {
    const removeFriend = (id) => {
        const action = removeFriendActionCreator(id);

        props.dispatch(action);
    };

    return (
        <FriendsListItem
            className={props.className}
            size={props.size}
            friend={props.friend}
            removeFriend={removeFriend}
        />
    );
};
