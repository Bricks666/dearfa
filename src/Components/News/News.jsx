import { CreatedPostsList } from "../Shared/CreatedPostsList/CreatedPostsList";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { MakePostContainer } from "../Shared/MakePost/MakePostContainer";

export function News(props) {
  /* Сделать Дизайн по-лучше */
  return (
    <main className={props.className}>
      <SectionHeader>Новости</SectionHeader>
      <MakePostContainer
        placeholder="Чем вы хотите поделиться сегодня"
        buttonMessage="Опубликовать"
      />
      <CreatedPostsList posts={props.posts.list} />
    </main>
  );
}
