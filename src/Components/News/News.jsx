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
                id={props.id}
                content={props.posts.newPostContent}
                dispatch={props.dispatch}
            />
            <CreatedPosts posts={props.posts.list} dispatch={props.dispatch} />
        </main>
    );
}
