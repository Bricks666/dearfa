import { inputLoginActionCreator } from "../../../Redux/ActionCreators/inputLoginActionCreator";
import { Checkbox } from "./Checkbox";

export const CheckboxContainer = (props) => {
    const toggleLike = (isChecked) => {
        const action = inputLoginActionCreator(props.children, isChecked);

        props.dispatch(action);
    };

    return (
        <Checkbox
            className={props.className}
            value={props.value}
            onChange={toggleLike}
        >
            {props.children}
        </Checkbox>
    );
};
