import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { RenderFields } from "../Shared/Fields/RenderFields";
import { INPUT_REG } from "../../Redux/Constants";

import RegistrationStyle from "./Registration.module.css";

export function Registration(props) {
  return (
    <main className={`${props.className ?? ""} ${RegistrationStyle.main}`}>
      <SectionHeader className={RegistrationStyle.header}>
        Регистрация
      </SectionHeader>
      <form className={RegistrationStyle.form}>
        {RenderFields(props.fields, INPUT_REG)}
      </form>
    </main>
  );
}
