import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { renderLoginFields } from "./RenderLoginFields";

import LoginStyle from "./Login.module.css";

export function Login(props) {
  return (
    <main className={`${props.className} ${LoginStyle.main}`}>
      <SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
      <form className={LoginStyle.form}>
        {renderLoginFields(props.fields, {
          standard: LoginStyle.field,
          button: LoginStyle.button,
        })}
      </form>
    </main>
  );
}
