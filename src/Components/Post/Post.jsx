import Picture from "../Picture/Picture";

import PostStyle from "./Post.module.css";

function Post(props) {
  return (
    <article className={PostStyle.post}>
      <h5 className={PostStyle.author}>Кирилл Цыганков</h5>
      <Picture
        className={`${PostStyle.photo} fake-photo`}
        oneXUrl=""
        twoXUrl=""
        alt="Аватарка автора"
      />
      <p className={PostStyle.content}>Почему меня никто не любит?</p>
    </article>
  );
}

export default Post;
