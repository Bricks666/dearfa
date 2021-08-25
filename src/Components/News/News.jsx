import { CreatedPosts } from "../CreatedPosts/CreatedPosts";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { MakePost } from "../MakePost/MakePost";

export function News(props) {
    return (
        <main className={props.className}>
            <SectionHeader>Новости</SectionHeader>
            <MakePost
                placeholder="Чем вы хотите поделиться сегодня"
                buttonMessage="Опубликовать"
                fieldName="Создание поста"
                id={props.id}
                stateFields={props.stateFields}
                dispatch={props.dispatch}
            />
            <CreatedPosts posts={props.posts} dispatch={props.dispatch} />
        </main>
    );
}
