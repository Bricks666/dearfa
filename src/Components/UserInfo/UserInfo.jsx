import AboutUser from "../AboutUser/AboutUser";
import Picture from "../Picture/Picture";
import UserInfoStyle from "./UserInfo.module.css";

function UserInfo(props) {
  return (
    <div className={`${props.className} ${UserInfoStyle.userInfo}`}>
      <h3 className={UserInfoStyle.fullName}>Цыганков Кирилл</h3>
      <Picture
        className={`${UserInfoStyle.photo} fake-photo`}
        oneXUrl=""
        twoXUrl=""
        alt="Ваша аватарка"
      />
      <AboutUser className={UserInfoStyle.aboutUser} />
    </div>
  );
}

export default UserInfo;
