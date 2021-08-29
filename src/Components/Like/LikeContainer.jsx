import { Like } from "./Like";
import { toggleLikeActionCreator } from "../../Redux/ActionCreators/toggleLike";

export const LikeContainer = (props) => {
    const toggle = (id) => {
        const action = toggleLikeActionCreator(props.postId);

        props.dispatch(action);
    };

    return (
        <Like
            className={props.className}
            status={props.status}
            toggle={toggle}
        />
    );
};
