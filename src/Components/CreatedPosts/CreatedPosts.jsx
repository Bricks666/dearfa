import Post from "../Post/Post";

import CreatedPostsStyle from "./CreatedPosts.module.css";

function CreatedPosts(props) {
  return (
    <section className={CreatedPostsStyle.createdPosts}>
      <Post dateTime={new Date("2002-05-17T03:51:06")} />
      <Post dateTime={new Date("2002-05-17T03:51:06")} />
    </section>
  );
}

export default CreatedPosts;
