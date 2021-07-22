import "./Post.css";
import Picture from "../Picture/Picture";

function Post(props) {
  return (
    <article className="post">
      <h4 className="post__author">Кирилл Цыганков</h4>
      <Picture
        className="post__photo"
        oneXUrl=""
        twoXUrl=""
        alt="Аватарка автора"
      />
      <p className="post__content">Почему меня никто не любит?</p>
    </article>
  );
}

export default Post;
