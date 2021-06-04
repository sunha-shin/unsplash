import React from 'react'
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/Home";
import Search from "./views/pages/Search";
import {GlobalStyle} from "./styled/GlobalStyle";
import HeaderContainer from "./views/containers/HeaderContainer";
import TopicByID from "./views/pages/TopicByID";

function App() {

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/search/:category/:query"} component={Search}/>
                <Route exact path={"/topics/:slug"} component={TopicByID}/>
            </Switch>
        </Container>
    )
}


const Container = styled.div`

`;

export default App;