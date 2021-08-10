import { CreatedPosts } from "../CreatedPosts/CreatedPosts";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export function News(props) {
  return (
    <main className={props.className}>
      <SectionHeader>Новости</SectionHeader>
      <CreatedPosts />
    </main>
  );
}
