import { FriendsListItem } from "./FriendListItem";
import { removeFriendActionCreator } from "../../../Redux/ActionCreators/removeFriend";
import { connect } from "react-redux";

/* export const FriendListItemContainer = (props) => {
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
}; */

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFriend(id) {

      dispatch(removeFriendActionCreator(id));
    },
  };
};

export const FriendListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsListItem);
