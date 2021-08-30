import React from "react";
import { CreatedPostsListContainer } from "../../Shared/CreatedPostsList/CreatedPostsListContainer";
import { MakePostContainer } from "./MakePost/MakePostContainer";
import { SubsectionHeader } from "../../Shared/SubsectionHeader/SubsectionHeader";

import PostsStyle from "./Posts.module.css";

function Posts(props) {
  return (
    <section className={`${props.className ?? ""} ${PostsStyle.posts}`}>
      <SubsectionHeader className={`${PostsStyle.heading}`}>
        Мои посты
      </SubsectionHeader>
      <MakePostContainer
        className={PostsStyle.makeMessage}
        placeholder="Чем вы хотите поделиться сегодня"
        buttonMessage="Опубликовать"
      />
      <CreatedPostsListContainer />
    </section>
  );
}

export { Posts };
