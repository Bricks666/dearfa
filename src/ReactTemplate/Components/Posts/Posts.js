import CreatedPosts from "../CreatedPosts/CreatedPosts";
import MakePost from "../MakePost/MakePost";
import "./Posts.css";

function Posts(props) {
  return (
    <section className={props.className + " posts"}>
      <h3 className="posts__heading">Мои посты</h3>
      <MakePost className="posts__form" />
      <CreatedPosts />
    </section>
  );
}

export default Posts;
