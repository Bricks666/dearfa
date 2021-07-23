import Picture from "../Picture/Picture";
import Posts from "../Posts/Posts";
import UserInfo from "../UserInfo/UserInfo";
import "./Profile.css";

function Profile(props) {
  return (
    <main className={props.className + " profile"}>
      <Picture
        className="profile__picture"
        oneXUrl=""
        twoXUrl=""
        alt="Ваш фон"
      />
      <UserInfo className="profile__user-profile" />
      <Posts className="profile__posts" />
    </main>
  );
}

export default Profile;
