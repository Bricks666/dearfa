import Picture from "../Picture/Picture";
import Posts from "../Posts/Posts";
import SectionHeader from "../SectionHeader/SectionHeader";
import UserInfo from "../UserInfo/UserInfo";

import ProfileStyle from "./Profile.module.css";

function Profile(props) {
  return (
    <main className={`${props.className ?? ""} ${ProfileStyle.profile}`}>
      <SectionHeader className="visibility-hidden">Профиль</SectionHeader>
      <Picture className={`${ProfileStyle.image} fake-photo`} alt="Ваш фон" />
      <UserInfo className={ProfileStyle.userInfo} />
      <Posts className={ProfileStyle.posts} />
    </main>
  );
}

export default Profile;
