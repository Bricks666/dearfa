import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { renderRegFields } from "./RenderRegFields";

import RegistrationStyle from "./Registration.module.css";

export function Registration(props) {
  return (
    <main className={`${props.className ?? ""} ${RegistrationStyle.main}`}>
      <SectionHeader className={RegistrationStyle.header}>
        Регистрация
      </SectionHeader>
      <form className={RegistrationStyle.form}>
        {renderRegFields(props.fields, { button: RegistrationStyle.button })}
      </form>
    </main>
  );
}
