import AboutList from "../AboutList/AboutList";
import "./UserProfile.css";

function UserProfile(props) {
  return (
    <div className={props.className + " user-profile"}>
      <h2 className="user-profile__full-name">Цыганков Кирилл</h2>
      <picture className="user-profile__photo" width="250">
        <source srcSet=" .avif 1x, .avif 2x" type="image/avif"></source>
        <source srcSet=".webp 1x, .webp 2x" type="image/webp"></source>
        <img src=".jpg 1x" srcSet=".jpg 2x" alt="Ваше фото" />
      </picture>
      <AboutList />
    </div>
  );
}

export default UserProfile;
