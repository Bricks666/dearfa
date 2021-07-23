import Post from "../Post/Post";

import CreatedPostsStyle from "./CreatedPosts.module.css";

function CreatedPosts(props) {
  return (
    <section className={CreatedPostsStyle.createdPosts}>
      <Post />
      <Post />
    </section>
  );
}

export default CreatedPosts;
