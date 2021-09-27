import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { EmailField } from "./FormParts/EmailField";
import { PasswordField } from "./FormParts/PasswordField";
import { RememberCheckbox } from "./FormParts/RememberCheckbox";
import { LoginButton } from "./FormParts/LoginButton";

import LoginStyle from "./Login.module.css";

export function Login(props) {
  return (
    <main className={`${props.className} ${LoginStyle.main}`}>
      <SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
      <form className={LoginStyle.form}>
        <EmailField className={LoginStyle.field} disabled={props.idDisabled}>
          Ваша почта
        </EmailField>
        <PasswordField className={LoginStyle.field} disabled={props.isDisabled}>
          Ваш пароль
        </PasswordField>
        <RememberCheckbox disabled={props.isDisabled}>
          Запомнить меня
        </RememberCheckbox>
        <LoginButton className={LoginStyle.button} disabled={props.isDisabled}>
          Войти
        </LoginButton>
        {/*
        {renderLoginFields(props.fields, {
          standard: LoginStyle.field,
          button: LoginStyle.button,
        })} */}
      </form>
    </main>
  );
}
