import Picture from "../Picture/Picture";
import FriendsListItem from "../FriendsListItem/FriendListItem";

import FriendsListStyle from "./FriendsList.module.css";

function FriendsList(props) {
  return (
    <ul className={`${FriendsListStyle.list} ${props.className}`}>
      <FriendsListItem className={FriendsListStyle.item} fullName="кирилл" hiddenName/>
      <FriendsListItem className={FriendsListStyle.item} fullName="кирилл" hiddenName/>
      <FriendsListItem className={FriendsListStyle.item} fullName="кирилл" hiddenName/>
      <FriendsListItem className={FriendsListStyle.item} fullName="кирилл" hiddenName/>
    </ul>
  );
}

export default FriendsList;
