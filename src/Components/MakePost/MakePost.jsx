import MakePostStyle from "./MakePost.module.css";

function MakePost(props) {
  return (
    <form class={`${props.className} ${MakePostStyle.makePost}`}>
      <textarea
        className={MakePostStyle.newPostText}
        placeholder="Твои новости..."
      ></textarea>
      <input className={MakePostStyle.button} value="Опубликовать" type="submit" />
    </form>
  );
}

export default MakePost;
