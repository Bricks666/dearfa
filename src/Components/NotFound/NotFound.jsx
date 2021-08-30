import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";

import NotFoundStyle from "./NotFound.module.css";

export function NotFound(props) {
  return (
    <main className={`${props.className} ${NotFoundStyle.main}`}>
      <SectionHeader>Страница не найдена</SectionHeader>
    </main>
  );
}
