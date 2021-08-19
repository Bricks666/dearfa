import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { Button } from "../../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { RenderFields } from "../RenderFields";

import LoginStyle from "./Login.module.css";

export function Login(props) {
    return (
        <main className={`${props.className} ${LoginStyle.main}`}>
            <SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
            <form className={LoginStyle.form}>
                {RenderFields(props.fields, LoginStyle.field)}
                <Checkbox> Запомнить меня</Checkbox>
                <Button className={LoginStyle.button} type="submit">
                    Войти
                </Button>
            </form>
        </main>
    );
}
