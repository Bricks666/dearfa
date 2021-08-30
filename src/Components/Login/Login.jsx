import { INPUT_LOGIN } from "../../Redux/Constants";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { RenderFields } from "../Shared/Fields/RenderFields";

import LoginStyle from "./Login.module.css";

export function Login(props) {
  return (
    <main className={`${props.className} ${LoginStyle.main}`}>
      <SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
      <form className={LoginStyle.form}>
        {RenderFields(props.fields, INPUT_LOGIN, LoginStyle.field)}
      </form>
    </main>
  );
}
