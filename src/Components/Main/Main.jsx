import { Switch, Route } from "react-router";
import { Profile } from "../Profile/Profile";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";

export function Main(props) {
    const RenderProfile = (infos) => {
        const arr = Array.from(infos, ([name, value]) => value);
        console.log(arr);
        return arr.map((user) => {
            console.log(user);
            return (
                <Route path={`/profile/${user.info.id}`}>
                    <Profile className={props.className} data={user.info} />
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
                    data={props.data.get(1).chats}
                />
            </Route>
            <Route path="/friends">
                <Friends
                    className={props.className}
                    data={props.data.get(1).friends}
                />
            </Route>
            <Route path="/news">
                <News className={props.className} />
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
