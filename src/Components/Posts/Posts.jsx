import React from "react";
import CreatedPosts from "../CreatedPosts/CreatedPosts";
import MakeMessage from "../MakeMessage/MakeMessage";
import SubsectionHeader from "../SubsectionHeader/SubsectionHeader";

import PostsStyle from "./Posts.module.css";

function Posts(props) {
  return (
    <section className={`${props.className ?? ""} ${PostsStyle.posts}`}>
      <SubsectionHeader className={`${PostsStyle.heading}`}>
        Мои посты
      </SubsectionHeader>
      <MakeMessage
        className={PostsStyle.makeMessage}
        placeholder="Чем вы хотите поделиться сегодня"
        buttonMessage="Опубликовать"
      />
      <CreatedPosts />
    </section>
  );
}

export default Posts;
