import React, {useEffect} from 'react'
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/Home";
import Search from "./views/pages/Search";
import {GlobalStyle} from "./styled/GlobalStyle";
import HeaderContainer from "./views/containers/HeaderContainer";
import {useDispatch} from "react-redux";
import {Action} from "./redux/app/redux";


function App() {

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/search/photos/:query"} component={Search}/>
            </Switch>
        </Container>
    )
}


const Container = styled.div`

`;

export default App;