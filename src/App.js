import React, {useEffect} from 'react'
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/Home";
import Search from "./views/pages/Search";
import {GlobalStyle} from "./styled/GlobalStyle";
import HeaderContainer from "./views/containers/HeaderContainer";
import TopicByID from "./views/pages/TopicByID";
import PopupContainer from "./views/containers/PopupContainer";
import PhotoById from "./views/pages/PhotoById";
import User from "./views/pages/User";
import Auth from "./views/pages/Auth";
import {LocalStorage} from "./lib/localStorage";
import {authActions} from "./redux/actionCreators";
import MyPage from "./views/pages/MyPage";

function App() {

    useEffect(() => {
        const token = LocalStorage.accessToken.get();
        if(token) {
            authActions.getUserProfile();
            authActions.setAccessToken(token);
        }
    }, [])

    return (
        <Container className={"App"}>
            <GlobalStyle/>
            <PopupContainer/>
            <HeaderContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/auth"} component={Auth}/>
                <Route exact path={"/search/:category/:query"} component={Search}/>
                <Route exact path={"/photos/:id"} component={PhotoById}/>
                <Route exact path={"/topics/:slug"} component={TopicByID}/>
                <Route exact path={"/mypage"} component={MyPage}/>
                <Route exact path={"/:username"} component={User}/>
            </Switch>
        </Container>
    )
}


const Container = styled.div`
  
`;

export default App;