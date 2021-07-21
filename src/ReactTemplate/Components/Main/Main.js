import Picture from "../Picture/Picture";
import Posts from "../Posts/Posts";
import UserProfile from "../UserProfile/UserProfile";
import "./Main.css";

function Main(props) {
  return (
    <main className="page__main main">
      <Picture className="main__picture" oneXurl="" twoXUrl="" alt="Ваш фон"/>
      <UserProfile className="main__user-profile" />
      <Posts className="main__posts" />
    </main>
  );
}

export default Main;
