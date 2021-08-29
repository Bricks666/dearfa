import { StandardField } from "./StandardFields";

export const StandardFieldContainer = (props) => {
    const onChange = (text) => {
        const action = props.actionCreator(props.fieldInfo.content, text);

        props.dispatch(action);
    };

    return (
        <StandardField
            className={props.className}
            fieldInfo={props.fieldInfo}
            inputField={onChange}
        />
    );
};
