import Post from "../Post/Post";
import "./CreatedPosts.css";

function CreatedPosts(props) {
  return (
    <section className="created-posts">
      <Post />
      <Post />
    </section>
  );
}

export default CreatedPosts;
