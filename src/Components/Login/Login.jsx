import { FormField } from "../FormField/FormField";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { Button } from "../Button/Button";

import LoginStyle from "./Login.module.css";
import { Checkbox } from "../Checkbox/Checkbox";

export function Login(props) {
    return (
        <main className={`${props.className} ${LoginStyle.main}`}>
            <SectionHeader>Вход</SectionHeader>
            <form className={LoginStyle.form}>
                <FormField className={LoginStyle.field} required autoComplete>
                    Логин
                </FormField>
                <FormField
                    className={LoginStyle.field}
                    type="password"
                    required
                    autoComplete
                >
                    Пароль
                </FormField>
                <Checkbox> Запомнить меня</Checkbox>
                <Button className={LoginStyle.button} type="submit">
                    Войти
                </Button>
            </form>
        </main>
    );
}
