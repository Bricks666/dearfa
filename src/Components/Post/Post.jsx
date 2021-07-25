import Picture from "../Picture/Picture";
import ParseDate from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
  return (
    <article className={PostStyle.post}>
      <h5 className={PostStyle.author}>{props.author}</h5>
      <time className={PostStyle.dateTime} dateTime={props.dateTime ?? ""}>
        {ParseDate(props.dateTime ?? "")}
      </time>
      <Picture
        className={`${PostStyle.photo} fake-photo`}
        oneXSrc=""
        twoXSrc=""
        alt="Аватарка автора"
      />
      <p className={PostStyle.content}>{props.children}</p>
    </article>
  );
}

export default Post;
