import Post from "../Post/Post";

import CreatedPostsStyle from "./CreatedPosts.module.css";

function CreatedPosts(props) {
  return (
    <section className={CreatedPostsStyle.createdPosts}>
      <Post dateTime={new Date("2002-05-17T03:51:06")} author="Кирилл Цыганков">
        Почему меня никто не любит? А может не никто?
      </Post>
      <Post
        dateTime={new Date("2002-05-17T03:51:06")}
        author="Неизвестный герой 235"
      >
        Ночь, улица, фонарь, аптека,<br></br>
        Бессмысленный и тусклый свет.<br></br>
        Живи еще хоть четверть века —<br></br>
        Всё будет так. Исхода нет.<br></br>
        <br></br>
        Умрешь — начнешь опять сначала<br></br>
        И повторится всё, как встарь:
        <br></br>
        Ночь, ледяная рябь канала,<br></br>
        Аптека, улица, фонарь.<br></br>
      </Post>
    </section>
  );
}

export default CreatedPosts;
