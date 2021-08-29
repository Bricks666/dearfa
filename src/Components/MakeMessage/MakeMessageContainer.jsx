import { addMessageActionCreator } from "../../Redux/ActionCreators/addMessage";
import { inputMessageActionCreator } from "../../Redux/ActionCreators/inputMessageActionCreator";
import { MakeMessage } from "./MakeMessage";

export const MakeMessageContainer = (props) => {
    const addMessage = () => {
        const action = addMessageActionCreator();

        props.dispatch(action);
    };

    const inputMessage = (text) => {
        const action = inputMessageActionCreator(text);

        props.dispatch(action);
    };

    return (
        <MakeMessage
            className={props.className}
            placeholder={props.placeholder}
            buttonMessage={props.buttonMessage}
            content={props.content}
            addMessage={addMessage}
            inputMessage={inputMessage}
        />
    );
};
