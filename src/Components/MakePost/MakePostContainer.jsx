import { addPostActionCreator } from "../../Redux/ActionCreators/addPost";
import { inputPostActionCreator } from "../../Redux/ActionCreators/inputPostActionCreator";
import { MakePost } from "./MakePost";

export const MakePostContainer = (props) => {
    const addPost = () => {
        const action = addPostActionCreator();

        props.dispatch(action);
    };

    const inputPost = (text) => {
        const action = inputPostActionCreator(text);

        props.dispatch(action);
    };

    return (
        <MakePost
            className={props.className}
            placeholder={props.placeholder}
            buttonMessage={props.buttonMessage}
            content={props.content}
            addPost={addPost}
            inputPost={inputPost}
        />
    );
};
