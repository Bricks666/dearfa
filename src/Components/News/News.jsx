import { CreatedPostsList } from "../Shared/CreatedPostsList/CreatedPostsList";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";

export function News(props) {
  /* Сделать Дизайн по-лучше */
  return (
    <main className={props.className}>
      <SectionHeader>Новости</SectionHeader>
      <CreatedPostsList posts={props.posts.list} />
    </main>
  );
}
