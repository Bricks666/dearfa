import Picture from "../Picture/Picture";
import Posts from "../Posts/Posts";
import UserProfile from "../UserProfile/UserProfile";
import "./Profile.css";

function Profile(props) {
  return (
    <main className={props.className + " profile"}>
      <Picture className="profile__picture" oneXurl="" twoXUrl="" alt="Ваш фон" />
      <UserProfile className="profile__user-profile" />
      <Posts className="profile__posts" />
    </main>
  );
}

export default Profile;
