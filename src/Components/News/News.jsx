import { CreatedPostsListContainer } from "../Shared/CreatedPostsListContainer/CreatedPostsListContainer";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";

export function News(props) {
  /* Сделать Дизайн по-лучше */
  return (
    <main className={props.className}>
      <SectionHeader>Новости</SectionHeader>
      <CreatedPostsListContainer />
    </main>
  );
}
