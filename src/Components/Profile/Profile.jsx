import Picture from "../Picture/Picture";
import Posts from "../Posts/Posts";
import UserInfo from "../UserInfo/UserInfo";
import ProfileStyle from "./Profile.module.css";

function Profile(props) {
  return (
    <main className={`${props.className} ${ProfileStyle.profile}`}>
      <Picture
        className={`${ProfileStyle.image} fake-photo`}
        oneXUrl=""
        twoXUrl=""
        alt="Ваш фон"
      />
      <UserInfo className={ProfileStyle.userInfo} />
      <Posts className={ProfileStyle.posts} />
    </main>
  );
}

export default Profile;
