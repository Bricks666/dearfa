import "./MakePost.css";

function MakePost(props) {
  return (
    <form class={props.className + " make-post"}>
      <textarea
        className="make-post__textarea"
        placeholder="Твои новости..."
      ></textarea>
      <input className="make-post__button" value="Опубликовать" type="submit" />
    </form>
  );
}

export default MakePost;
