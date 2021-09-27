import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { EmailField } from "./FormParts/EmailField";
import { FullNameField } from "./FormParts/FullNameField";
import { PasswordAgainField } from "./FormParts/PasswordAgainField";
import { PasswordField } from "./FormParts/PasswordField";
import { RegistrationButton } from "./FormParts/RegistrationButton";

import RegistrationStyle from "./Registration.module.css";

export function Registration(props) {
  return (
    <main className={`${props.className ?? ""} ${RegistrationStyle.main}`}>
      <SectionHeader className={RegistrationStyle.header}>
        Регистрация
      </SectionHeader>
      <form className={RegistrationStyle.form}>
        <FullNameField disabled={props.isDisabled}>Ваше имя</FullNameField>
        <EmailField disabled={props.isDisabled}>Ваша почта</EmailField>
        <PasswordField disabled={props.isDisabled}>Ваш пароль</PasswordField>
        <PasswordAgainField disabled={props.isDisabled}>
          Повторите ваш пароль
        </PasswordAgainField>
        <RegistrationButton
          disabled={props.isDisabled}
          className={RegistrationStyle.button}
        >
          Зарегистрировать
        </RegistrationButton>
      </form>
    </main>
  );
}
