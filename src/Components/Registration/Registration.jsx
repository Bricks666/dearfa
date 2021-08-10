import { SectionHeader } from "../SectionHeader/SectionHeader";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import RegistrationStyle from "./Registration.module.css";

export function Registration(props) {
    return (
        <main className={`${props.className ?? ""} ${RegistrationStyle.main}`}>
            <SectionHeader className={RegistrationStyle.header}>
                Регистрация
            </SectionHeader>
            <form className={RegistrationStyle.form}>
                <FormField
                    className={RegistrationStyle.field}
                    type="text"
                    required
                >
                    Имя
                </FormField>
                <FormField
                    className={RegistrationStyle.field}
                    type="text"
                    required
                >
                    Фамилия
                </FormField>
                <FormField
                    className={RegistrationStyle.field}
                    type="tel"
                    required
                >
                    Номер телефона
                </FormField>
                <FormField className={RegistrationStyle.field} type="email">
                    Email
                </FormField>
                <FormField
                    className={RegistrationStyle.field}
                    type="password"
                    required
                >
                    Пароль
                </FormField>
                <FormField
                    className={RegistrationStyle.field}
                    type="password"
                    required
                >
                    Повторите пароль
                </FormField>
                <Button className={RegistrationStyle.button} type="submit">
                    Зарегистрироваться
                </Button>
            </form>
        </main>
    );
}
