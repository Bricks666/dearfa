import { Switch, Route } from "react-router";
import { Profile } from "../Profile/Profile";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";

export function Main(props) {
    const RenderProfile = (info) => {
        const arr = Array.from(info, ([name, value]) => value);
        return arr.map((user) => {
            return (
                <Route path={`/profile/${user.info.id}`} key={user.info.id}>
                    <Profile className={props.className} data={user} />
                </Route>
            );
        });
    };

    return (
        <Switch>
            {RenderProfile(props.data)}
            <Route path="/dialogs">
                <Dialogs
                    className={props.className}
                    chats={props.data.get(1).chats}
                />
            </Route>
            <Route path="/friends">
                <Friends
                    className={props.className}
                    friends={props.data.get(1).friends}
                />
            </Route>
            <Route path="/news">
                <News
                    className={props.className}
                    posts={props.data.get(1).posts}
                />
            </Route>
            <Route path="/login">
                <Login className={props.className} />
            </Route>
            <Route path="/registration">
                <Registration className={props.className} />
            </Route>
            <Route>
                <NotFound className={props.className} />
            </Route>
        </Switch>
    );
}
