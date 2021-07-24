import Picture from "../Picture/Picture";
import ParseDate from "./ParseDate";

import PostStyle from "./Post.module.css";

function Post(props) {
  return (
    <article className={PostStyle.post}>
      <h5 className={PostStyle.author}>Кирилл Цыганков</h5>
      <time className={PostStyle.dateTime} dateTime={props.dateTime ?? ""}>
        {ParseDate(props.dateTime ?? "")}
      </time>
      <Picture
        className={`${PostStyle.photo} fake-photo`}
        oneXSrc=""
        twoXSrc=""
        alt="Аватарка автора"
      />
      <p className={PostStyle.content}>
        Ночь, улица, фонарь, аптека,<br></br> Бессмысленный и тусклый свет.
        <br></br>
        Живи еще хоть четверть века —<br></br>
        Всё будет так. Исхода нет.<br></br>
        <br></br>
        Умрешь — начнешь опять сначала<br></br>И повторится всё, как встарь:
        <br></br>
        Ночь, ледяная рябь канала,<br></br>
        Аптека, улица, фонарь.<br></br>
      </p>
    </article>
  );
}

export default Post;
