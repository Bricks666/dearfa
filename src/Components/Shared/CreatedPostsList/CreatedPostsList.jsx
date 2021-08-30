import React from "react";
import { RenderPost } from "./RenderPost";

import CreatedPostsListStyle from "./CreatedPostsList.module.css";

function CreatedPostsList(props) {
  return (
    <section className={CreatedPostsListStyle.createdPosts}>
      {RenderPost(props.posts)}
    </section>
  );
}

export { CreatedPostsList };
