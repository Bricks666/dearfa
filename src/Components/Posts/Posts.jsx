import CreatedPosts from "../CreatedPosts/CreatedPosts";
import MakePost from "../MakePost/MakePost";


import PostsStyle from "./Posts.module.css";

function Posts(props) {
  return (
    <section className={`${props.className} ${PostsStyle.posts}`}>
      <h4 className={PostsStyle.heading}>Мои посты</h4>
      <MakePost  />
      <CreatedPosts />
    </section>
  );
}

export default Posts;
