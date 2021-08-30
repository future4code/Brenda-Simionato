import CadastrePage from "./hooks/CadastrePage";
import FeedPage from "./hooks/FeedPage";
import LoginPage from "./hooks/LoginPage";
import PostPage from "./hooks/PostPage";
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export default function Routers() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/feed"}>
                    <FeedPage />
                </Route>
                <Route exact path={"/post"}>
                    <PostPage />
                </Route>
                <Route exact path={"/cadastre"}>
                    <CadastrePage />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}